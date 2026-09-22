import type { CookieOptions, Response } from "express";
import config from "../config";

const ACCESS_TOKEN_MAX_AGE = 1000 * 60 * 60 * 24; // 1 day
const REFRESH_TOKEN_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // 7 days

const isProduction = config.node_env === "production";

/**
 * Cross-site cookies (sameSite: "none") are only accepted by browsers when the
 * cookie is also marked Secure, which requires HTTPS. In local development the
 * API runs on http://localhost:5000 and the app on http://localhost:3000 —
 * different ports are still the *same site*, so "lax" is both valid and enough.
 */
const baseCookieOptions: CookieOptions = {
	httpOnly: true,
	secure: isProduction,
	sameSite: isProduction ? "none" : "lax",
	path: "/",
};

export const setAuthCookies = (
	res: Response,
	tokens: { accessToken: string; refreshToken: string },
) => {
	res.cookie("accessToken", tokens.accessToken, {
		...baseCookieOptions,
		maxAge: ACCESS_TOKEN_MAX_AGE,
	});

	res.cookie("refreshToken", tokens.refreshToken, {
		...baseCookieOptions,
		maxAge: REFRESH_TOKEN_MAX_AGE,
	});
};

/**
 * A cookie is only removed when it is cleared with the same attributes it was
 * set with, so this mirrors baseCookieOptions instead of calling clearCookie
 * with no options.
 */
export const clearAuthCookies = (res: Response) => {
	res.clearCookie("accessToken", baseCookieOptions);
	res.clearCookie("refreshToken", baseCookieOptions);
};
