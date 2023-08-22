import styled from "styled-components";

/* Comment H3 ---------------------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                1. HTML (HyperText Markup Language) creates the skeletal
                structure of web content. CSS (Cascading Style Sheets) lets you
                design the way HTML elements look on your page. Javascript
                allows you to make resonsive elements, animations, makes the
                page dynamic.
            </Essay>

            <Essay question="Q2: What is the difference between Git and Github?">
                2. Git is a version control system, allows you to undo, track
                changes, collaborate, branching non-linear workflows. Github is
                a Cloud-based Git repository to share code online. Allows for
                feedback, store feature branches.
            </Essay>
            <Essay question="Q3: What is the difference between JQuery and React?">
                3. Jquery is a lightweight library for streamlining web
                development using JavaScript, allows you to not reinvent the
                wheel. Revolusionized web development. React is also a library
                that allows embedding HTML within Javascript, build UIs. Virtual
                DOM technology, JSX.
            </Essay>
            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                4. A front-end developer handles the visual aspect of the
                website, what the user sees and interacts with, navigation,
                responsiveness, etc. Primarily uses HTML, CSS, and Javascript.
                Tools such as libraries, React, Vue, Angular can be used as
                well. A back-end developer is in charge of what is under the
                hood, server-side, data-base, storage, APIs, security. This
                allows the front end to be displayed on your browser. PHP, Java,
                Python are used, there are more options for programming
                languages for back-end developers.
            </Essay>
            <Essay question="Q5: What is the difference between Absolute, Root and Document Relative linking?">
                5. Absolute is the global address of a resourse, complete URL of
                linked document (image asset ex.
                http://www.adobe.com/support/dreamweaver/contents.html). Must
                use absolute path to link to asset on another server. Not best
                for local links because they break if you ever move domains.
                Root describes the path from the site's root folder to an
                asset/document. (ex. /support/dreamweaver/contents.html). If you
                move or rename the documents targeted by site root–relative
                links, you must update those links. Makes moving files around
                easier. Document-relative are links relative to document you are
                writing (ex. dreamweaver/contents.html). Can move up a directory
                in the hierarchy using dots. (../)
            </Essay>
            <Essay question="Q6: What is the difference between jpg, gif, png and svg images?">
                6. JPG (Joint Photographic Experts Group) is a file type good
                for photographs, supports full color spectrum. Reducing file
                size/ compression will reduce image quality. PNG (Portable
                Network Graphics) supports transparency, image quality does not
                decrease when compressed or re-saved. Good for logos, charts,
                infographics, text-heavy files. Bigger file size can slow
                webpage down if overused. GIFs (Graphics Interchange Format) is
                best for animated graphics. Supports up to 256 colors and
                transparency. Small file size. Not best for complex gradients.
                SVGs are vector files that store images via mathematical
                formulas based on points and lines on a grid. Infinitely
                scalable. Written in XML code. Web-friendly, good for web
                illustrations, icons, logos, charts.
            </Essay>
            <Essay question="Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.">
                7. Product Owner oversees development team tasks, responsible
                for maximizing value of the product resulting from the work of
                the Development Team. Product manager connects to stakeholder
                and customers directly, identifies customer needs, business
                objectives and strategies. Business Analyst focused on the
                needs, progress, and processes of the project/systems. Increase
                efficiency. Scrum Master leads a project team using agile
                project management. Manage exchange of info between team
                members/leadership. UX designer is in charge of making a product
                useable, enjoyable and accessible. Create user flows, mockups,
                interview and a/b test, use elements of psychology.
                Developer/Engineer in charge of building, creating useable
                increment. QA/SDET review code, use test tools, develop test
                cases, track bugs. DevOps describes how to continuously deploy
                code, maintain and update through the use of modern tools and
                automated processes.
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
