Running this program:
1. Clone this repository to your local device.
2. Open the folder Fantasy Madlibs React in your desired IDE.
3. Open a terminal and CD into the Fantasy Madlibs React folder. 
4. Use the following commands in your terminal: 
    - npm install
    - npm run dev
5. Open a web browser and search in the URL bar: '//localhost:5173
6. Enjoy!

Adding additional Madlibs:
1. Add a new JSX file under the pages folder.
2. Copy/Paste all info inside of /assets/Template.txt to this new file.
3. Add the following information:
    - newfile.jsx:
        1. Update BookName to the desired name (using Caps) in the following locations: Line 5, Line 77, and Line 108.
        2. Copy/paste your book blurb to Line 67. 
        3. Make decisions on which words to replace with inputs and place those into curly brackets. Use your own or follow previous naming conventions from other files.
            - Variables defined within curly braces need to be added in multiple locations: Line 8 and Line 56. Line 10 will only need the names of the variables, omitting the ' :"" ' used with objects.
            - Seperate paragraphs using </p><p> tags where you want separation.
            - Ensure variables do not start or end any line in your code. Make sure at least one character exists at the beginning or end of your lines (spaces do not count). Feel free to have your sentences run-on to the right to avoid this altogether (still separate with <p> tags as needed for spacing.)
        4. Copy/paste Lines 84-96 one after another to match the number of inputs required. 
            - Edit each section with the type of word required for entry (adjective, noun, verb, etc.).
                1. Line 86 is the label for the text field (Adjective).
                2. Line 89 is the text that appears in the tex field before you begin typing ('Please enter an adjective').
                3. Line 90 and 91 is the variable name you defined in step 3. (90: "adjectiveOne" and 91: adjectiveOne).
    - App.jsx
        1. Add import statement at the top of the file.
        2. Add <Route> using the same formatting as other Route elements (no specific order used here).
    - home.jsx
        1. Add <button> at your desired location in the return statement using the same formatting as other button elements.

