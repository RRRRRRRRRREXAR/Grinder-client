import { ImageModel } from './ImageModel';

export class ProfileModel{
    Id:number;
    FirstName:string;
    LastName:string;
    Email:string;
    BirthDate:Date;
    Gender:string;
    MeetGoal:string;
    Other:string;
    Interests:string;
    Images:ImageModel[];
    ProfileImage:ProfileModel;
    IsAnonymous:boolean;
}