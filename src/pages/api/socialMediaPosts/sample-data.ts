import { v4 as uuid } from 'uuid'

import SocialMediaPost from 'interfaces/SocialMediaPost'

const socials = ['twitter', 'youtube', 'instagram']

const generatePosts = (): SocialMediaPost[] =>
  new Array(15).fill(20).map((_p, index) => ({
    id: uuid(),
    title: `Some Twitter Post ${index}`,
    body: "It's here! The #GuardiansoftheGalaxyHolidaySpecial is now streaming on Disney+🎄 Our VFX superheroes had a blast adding some holiday sparkle to this festive firecracker 🎁 #GotGHolidaySpecial",
    createdDate: new Date(),
    origin: socials[index % 3],
    media: [
      index % 2 == 0
        ? {
            type: 'video',
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // used data from https://gist.github.com/jsturgis/3b19447b304616f18657
            defaultImageUrl: 'poster',
          }
        : {
            type: 'image',
            url: 'https://m.media-amazon.com/images/M/MV5BNDk5NTEyZjQtZWM5ZC00ODcxLTkyMTMtOTBiNTAyYmI1NWU3XkEyXkFqcGdeQXVyODkzNTgxMDg@._CR400,11,2825,1589_UX1248_UY702_QL75_UY281_CR0,0,500,281_.jpg',
          },
    ],
  }))

export const sampleSocialMediaPostsData: SocialMediaPost[] = generatePosts()
