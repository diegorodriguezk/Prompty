import Feed from '@components/Feed';
// import Form from '@components/Form';

export const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">
                AI-Powered Prompts
            </span>
        </h1>
        <p className="desc text-center">
            Prompty is an open-source AI Prompting tool for modern world to discover, create and share creative prompts 
        </p>
       

       < Feed />
       {/* < Form />  */}
        </section>
  )
}

export default Home