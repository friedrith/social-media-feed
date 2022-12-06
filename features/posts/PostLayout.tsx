import SocialMediaPost from 'interfaces/SocialMediaPost'
import Media from 'components/molecules/Media'

type Props = {
  title: React.ReactNode
  body: React.ReactNode
  createdDate: React.ReactNode
  media: React.ReactNode
  icon?: React.ReactNode
}

// https://tailwindui.com/components/application-ui/layout/media-objects#component-d4761775d88a3e2127cd14e89431c257
const PostLayout = ({ title, body, createdDate, media, icon = [] }: Props) => {
  return (
    <div className="sm:flex">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">{media}</div>
      <div className="flex-1">
        <div className="flex items-end">
          <h4 className="text-lg font-bold text-black dark:text-white flex-1">
            {title}
          </h4>
          <div className="text-xs text-gray-500 font-medium mr-2">
            {createdDate}
          </div>
          {icon}
        </div>
        <div className="mt-1 text-sm text-gray-500">{body}</div>
      </div>
    </div>
  )
}

export default PostLayout
