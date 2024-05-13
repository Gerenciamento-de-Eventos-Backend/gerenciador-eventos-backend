import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import ticketService from "../services/database/user"
import { Tickets } from "../models/constructors/user";