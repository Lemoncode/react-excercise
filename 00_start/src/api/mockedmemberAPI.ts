import {MemberEntity, createDefaultMemberEntity } from '../model/member';

const lemoncodemocked = 	[
  {
    id: 1457912,
    login: "brauliodiez",
    avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
  },
  {
    id: 4374977,
    login: "Nasdan",
    avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
  }
]

const rochemocked = 	[
  {
    id: 1457912,
    login: "Hasn Fritz",
    avatar_url: "https://avatars0.githubusercontent.com/u/3278391?s=460&v=4"
  },
  {
    id: 4374977,
    login: "Pieree Nodoyuna",
    avatar_url: "https://avatars2.githubusercontent.com/u/2371880?s=460&v=4"
  }
]


class MemberAPI {

  // Just return a copy of the mock data
  getAllMembers(organizationName : string) : Promise<MemberEntity[]> {
    const promise = new Promise<MemberEntity[]>((resolve, reject) => {
      setTimeout(() => {
        const list = (organizationName === 'lemoncode') ? lemoncodemocked : rochemocked; 
        resolve(list);
      }, 1000)
    })
    
    return promise;;
  }
}


export const memberAPI = new MemberAPI();