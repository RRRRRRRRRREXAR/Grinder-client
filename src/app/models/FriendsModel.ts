import { ProfileModel } from './ProfileModel';

export class FriendsModel{
  id:string;
  sender:ProfileModel;
  recivier:ProfileModel;
  status:string;
}
