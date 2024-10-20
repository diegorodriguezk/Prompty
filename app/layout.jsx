import '@styles/globals.css'; // Use relative path
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metada ={
    title: "Promptopia",
    description: 'discover & Share AI Prompts'

}

export const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" /> 
            </div>
            <main className="app">
                < Nav />
                
                {children}
                < Provider />
            </main>
        </body>
    </html>
  )
}
export default RootLayout