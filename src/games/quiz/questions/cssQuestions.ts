export const cssQuestions = [
    {
        question: "When you set the width and height properties of an element with CSS, you just set...?",
        a: {option: "The width and height of the content area", isCorrect: true},
        b: {option: "The total width of an element ", isCorrect: false},
        c: {option: "The padding and margin of an element", isCorrect: false},
        d: {option: "The borders of an element", isCorrect: false},
    },
    {
        question: "The total width of an element should be calculated like this:",
        a: {option: "Total element width = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin", isCorrect: false},
        b: {option: "Total element width = width + left padding + right padding + left border + right border + left margin + right margin", isCorrect: true},
        c: {option: "Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin", isCorrect: false},
        d: {option: "Total element height = width + left padding + right padding + left border + right border + left margin + right margin", isCorrect: false},
    },
    {
        question: "z-index only works on?",
        a: {option: "Last element", isCorrect: false},
        b: {option: "Box model", isCorrect: false},
        c: {option: "Alimated elements", isCorrect: false},
        d: {option: "Positioned elements and flex items", isCorrect: true},
    },
    {
        question: "Mobile First means...?",
        a: {option: "Changing styles when the width gets smaller than 768px", isCorrect: false},
        b: {option: "Designing for desktop or any other device before designing for mobile", isCorrect: false},
        c: {option: "Designing for mobile before designing for desktop or any other device", isCorrect: true},
        d: {option: "That we must make some changes in our CSS", isCorrect: false},
    },
    {
        question: "To start using the Flexbox model, you need to first...?",
        a: {option: "Define a grid container", isCorrect: false},
        b: {option: "Define flex-direction", isCorrect: false},
        c: {option: "Set float to center", isCorrect: false},
        d: {option: "Define a flex container", isCorrect: true},
    },
    {
        question: "Which of the following is the correct way to declare a font-family for a paragraph element in CSS??",
        a: {option: "font-family: Arial", isCorrect: false},
        b: {option: "p { font-family: Arial; }", isCorrect: true},
        c: {option: "font-family { Arial; }", isCorrect: false},
        d: {option: "p font-family: Arial;", isCorrect: false},
    },
    {
        question: "What is the difference between visibility:hidden and display:none??",
        a: {option: "visibility:hidden removes the element completely, while display:none hides the element but it still takes up space", isCorrect: false},
        b: {option: "visibility:hidden hides the element but it does not take up space, while display:none removes the element and takes up space", isCorrect: false},
        c: {option: "visibility:hidden removes the element and takes up space, while display:none hides the element but it does not take up space", isCorrect: false},
        d: {option: "visibility:hidden hides the element but it still takes up space, while display:none removes the element completely", isCorrect: true},
    },
    {
        question: "What is the difference between flex-wrap and flex-flow?",
        a: {option: "flex-wrap determines the direction of the elements in a flexbox, while flex-flow determines the wrapping of elements in a flexbox", isCorrect: false},
        b: {option: "flex-wrap determines the direction of the elements in a flexbox, while flex-flow is a shorthand property for both flex-direction and flex-wrap", isCorrect: true},
        c: {option: "lex-wrap determines the wrapping of elements in a flexbox, while flex-flow determines the direction of the elements in a flexbox", isCorrect: false},
        d: {option: "flex-wrap determines the wrapping of elements in a flexbox, while flex-flow is a shorthand property for both flex-direction and flex-wrap", isCorrect: false},
    },
    {
        question: "How would you specify the gap between grid items?",
        a: {option: "grid-gap: size", isCorrect: true},
        b: {option: "grid-spacing: size", isCorrect: false},
        c: {option: "grid-space: size", isCorrect: false},
        d: {option: "grid-margin: size", isCorrect: false},
    },
    {
        question: "How would you target devices with a width of less than 500px?",
        a: {option: "@media only screen and (min-width: 500px) { ... }", isCorrect: false},
        b: {option: "@media width < 500px { ... }", isCorrect: false},
        c: {option: "@media only screen and (max-width: 500px) { ... } ", isCorrect: true},
        d: {option: " @media width <= 500px { ... }", isCorrect: false},
    },
    {
        question: "What is the difference between margin and padding in the CSS box model?",
        a: {option: "Margin specifies the space inside of an element, while padding specifies the space outside of an element", isCorrect: false},
        b: {option: "Margin specifies the space between elements, while padding specifies the space within an element", isCorrect: false},
        c: {option: "Margin specifies the space outside of an element, while padding specifies the space inside of an element", isCorrect: true},
        d: {option: "Margin specifies the space within an element, while padding specifies the space between elements", isCorrect: false},
    },
    {
        question: "What is the difference between content-box and border-box in box sizing?",
        a: {option: "content-box specifies that the width and height of an element should include the element's content, padding, and border, while border-box specifies that the width and height of an element should include only the element's content", isCorrect: false},
        b: {option: "content-box specifies that the width and height of an element should include only the element's content and padding, while border-box specifies that the width and height of an element should include the element's content, padding, and border", isCorrect: false},
        c: {option: "content-box specifies that the width and height of an element should include the element's content and padding, while border-box specifies that the width and height of an element should include only the element's content", isCorrect: false},
        d: {option: "content-box specifies that the width and height of an element should include only the element's content, while border-box specifies that the width and height of an element should include the element's content, padding, and border", isCorrect: true},
    },
    {
        question: "How would you scale an element on the x-axis using CSS 2D transformations?",
        a: {option: "x-scale: value", isCorrect: false},
        b: {option: "transform: scaleX(value);", isCorrect: true},
        c: {option: "transform-scale-x: value", isCorrect: false},
        d: {option: "scale-x: value", isCorrect: false},
    },
    {
        question: "How would you set a 2 second transition effect on an element?",
        a: {option: "transition-time: 2s;", isCorrect: false},
        b: {option: " transition-duration: 2s;", isCorrect: false},
        c: {option: "transition: all 2s;", isCorrect: true},
        d: {option: "transition-effect: 2s;", isCorrect: false},
    },
    {
        question: "How would you set a background image for an element using CSS?",
        a: {option: "background-image: url(image_url);", isCorrect: true},
        b: {option: "background: image_url;", isCorrect: false},
        c: {option: "background-url: image_url;", isCorrect: false},
        d: {option: "bg-image: url(image_url);", isCorrect: false},
    },
]