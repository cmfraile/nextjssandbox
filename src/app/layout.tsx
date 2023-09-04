import LabelLinkComponent from '@/components/linkbar';
import '../styles/global.css'

const Bootstrap = () => 
  <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
  </>

const mainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <html lang="en">
      <title>Sandbox</title>
      <head><Bootstrap/></head>
      <body>
        <div className="container">
          <div className="row my-3"><div className="col"><LabelLinkComponent/></div></div>
          <div className="row my-3"><div className="col">{children}</div></div>
        </div>
      </body>
    </html>
  )
}

export default mainLayout
