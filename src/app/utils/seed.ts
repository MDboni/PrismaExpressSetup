import { Role } from "../../../prisma/generated/prisma/enums";
import config from "../config";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

export const seedSuperAdmin = async () => {
    try {
        const isSuperAdminExists = await prisma.user.findFirst({
            where: {
                role: Role.SUPER_ADMIN,
            },
        });

        if (!isSuperAdminExists) {
            console.log("Super Admin Already Exists");
            return ;
        }

        const name = config.SUPER_ADMIN_NAME;
        const email = config.SUPER_ADMIN_EMAIL;
        const password = config.SUPER_ADMIN_PASSWORD;

        if (!name || !email || !password) {
            throw new Error("Super Admin credentials are not set in the environment variables");
        }

        const hashedPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_rounds))


        const superAdmin = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: Role.SUPER_ADMIN,
                needPasswordChange: false,
                emailVerified: true,
            },
        });

        console.log("Super Admin created successfully:", superAdmin);
            

    }catch (error) {
        console.error("Error seeding Super Admin:", error);

        await prisma.user.delete({
            where: {
                email: config.SUPER_ADMIN_EMAIL,
            },
        })
    }
}


// create Taster admin 

export const seedTasterAdmin = async () => {
    try{
        const isTasterAdminExists = await prisma.user.findFirst({
            where: {
                email: config.tester_admin_email,
            },
        });

        if (isTasterAdminExists) {
            console.log("Taster Admin Already Exists");
            return ;
        }

        const name = "Taster Admin";
        const email = config.tester_admin_email;
        const password = config.tester_admin_password;

        if (!name || !email || !password) {
            throw new Error("Taster Admin credentials are not set in the environment variables");
        }

        const hashedPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_rounds))

        const tasterAdmin = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: Role.ADMIN,
                needPasswordChange: false,
                emailVerified: true,
            },
        });
        console.log("Taster Admin created successfully:", tasterAdmin);
    }catch (error) {
        console.error("Error seeding Taster Admin:", error);
        await prisma.user.delete({
            where: {
                email: config.tester_admin_email,
            },
        })
    }
}


// create tester doctor

export const seedTesterDoctor = async () => {
    try {
        const isTesterDoctorExist = await prisma.user.findUnique({
            where: {
                email : config.tester_doctor_email
            }
        });

        if (isTesterDoctorExist) {
            console.log("Tester Doctor Already Exists!");
            return;
        }

        const name = config.tester_doctor_name
        const email = config.tester_doctor_email
        const password = config.tester_admin_password

        if (!name || !email || !password) {
            throw new Error("Tester Doctor Name , Email, Password Missing In Env File!!!")
        }

        const hashedPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_rounds))

        const testerDoctor = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: Role.DOCTOR,
                needPasswordChange: false,
                emailVerified: true
            }
        })

        console.log("Tester Doctor Created : ",testerDoctor);



    } catch (error) {

        console.log("Error Seeding Tester Doctor : ", error);

        await prisma.user.delete({
            where: {
                email: config.tester_doctor_email
            }
        })


    }
}