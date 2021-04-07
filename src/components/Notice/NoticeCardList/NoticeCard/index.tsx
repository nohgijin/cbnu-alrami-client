import StyledNoticeCard from './style'
import NoticeDetail from '../../NoticeDetail'
import useOpenDialog from '@src/hooks/useOpenDialog'

export interface NoticeCardProps {
  noticeId: number
  title: string
  depart: string
  type: string
  date: string
}

function NoticeCard({ noticeId, title, depart, type, date }: NoticeCardProps) {
  const [openDialog, openCallback] = useOpenDialog()

  return (
    <>
      <StyledNoticeCard
        className="notice-card"
        onClick={e => {
          openDialog(e)
        }}>
        <div className="title">{title}</div>
        <div className="info">
          <div className="depart">{depart}</div>
          <div className="site-name">{type}</div>
          <div className="date">{date}</div>
        </div>
      </StyledNoticeCard>
      <NoticeDetail {...{ noticeId, openCallback }} />
    </>
  )
}

export default NoticeCard
