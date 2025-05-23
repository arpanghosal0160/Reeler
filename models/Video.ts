import mongoose, { Schema, model, models } from "mongoose";

export interface IVideo {
    title: string;
    description: string;
    url: string;
    thumbnail: string;
    userId: mongoose.Types.ObjectId;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}