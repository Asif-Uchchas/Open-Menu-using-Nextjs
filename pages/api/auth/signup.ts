import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName,lastName,email,city,phone,password } = req.body;
  const errors: string[] = [];
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "First name is invalid",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone is invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password is invalid",
      }

    ];

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email
      },
    })

    if (userWithEmail) {
      return res.status(400).json({ errorMessage: "Email is associated with another account!" });
    }

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length > 0) {
      return res.status(400).json({ errorMessage: errors[0] });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const secret = new TextEncoder().encode(process.env.JWT_SECREATE);
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        city,
        phone,
        password: hashedPassword
      }
    });
      
      return res.status(200).json({Hello: user });
  }

  // return res.status(200).json({ Hello: "Get... " });
}
