import Image from 'next/image'
import styles from './Loading.module.css'

export default function Loading ({loading}) {

  return (
    <div className={styles.loading} data-loading={loading}>
      <Image
        src="/static/img/EDLoader1.svg"
        width="600"
        height="1200"
        alt="Loading..."
      />
    </div>
  )
}