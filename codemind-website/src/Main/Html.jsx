
const Html = () => {
    return(
        <>
           <section className="bg-sky-500 h-screen text-white flex flex-col md:flex-row items-start justify-between px-8 py-12 ">
            <div className="md:w-1/2">
                <h1 className="text-3xl">solving challenges </h1><br />
                <h2 className="text-4xl">with love . . . </h2><br />
                <p  className="font-sans font-bold text-xl">
                    HTML (HyperText Markup Language) is the standard language used to create and structure web pages.
                    It defines the content and layout of a webpage using elements and tags.
                    HTML works hand-in-hand with CSS and JavaScript to build modern websites.
                    Each HTML element represents a part of the webpage, such as headings, paragraphs, or images.
                    It is the backbone of every website you visit on the internet.
                    HTML5 is the latest version and supports audio, video, and more powerful APIs.
                    It is easy to learn and essential for web developers and designers.
                    HTML code is interpreted by browsers to render content for users.
                </p>
            </div>
             <div className="md:w-1/2 mt-10 h-[300px] w-[500px] pl-10">
                <img src="html.jpg" alt="HTML Logo"className="w-full h-full object-cover   "/>
            </div>
           </section>
        </>
    )
}
export default Html;