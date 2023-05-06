# Quadulo

Belvoir Park Forest is an large area of woodland in the southern suburbs of Belfast; this website seeks to create an online presence for *Friends of Belvoir Park*, an imagined local conservation group based in and around this area of Belfast.

[LIVE LINK TO SITE](https://ndsurgenor.github.io/friends-of-belvoir-park)

The main aims of the site are as follows:
- to provide an appealing online presence that encourages users to find out more
- to provide general info on *Friends of Belvoir Park* and their activities
- to provide specific time/date information of events organised by the group
- to provide an convenient means of contacting the group

![Title & Navigation Bar](assets/images/readme/overview.png)


## Initial Development

Three user stories were created at the outset of this project to guide its initial design and provide goals for the finished project:
- User A: as someone who is a resident of the local area, I want to know more about *Friends of Belvoir Park* (*FBP*) so I can decide if its something I want to be a part of.
- User B: as someone who is aware of *FBP* but only at a basic level, I want to find out what specific events *FBP* run and when they're happening so I can decide what to take part in.
- User C: as someone who is passionate about green spaces and caring for the environment, I would like to join *FBP* so I can take an active role in a ‘green community’.

The intial design ideas were developed using interactive prototyping site [Uizard.io](https://app.uizard.io/p/517cac80) and can be viewed by following the link.

## Features 

### Existing Features

- __Title & Navigation Bar__

  - Featured on all three pages, the title and navigation elements are placed top and centre to allow for a coherent design across the site and a convenient location to access the Home, Events and Contact pages.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Title & Navigation Bar](assets/images/readme/title_navigation.png)

- __Hero Image__

  - The landing page includes an animated photograph and text overlay to highlight the main setting and ethos of *Friends of Belvoir Park*. 
  - The pan-down animation of the image draws the user's eye downwards so they will continue reading into the next section
  - The fade-in animation of the text draws attention to the ethos of the group

![Home Page](assets/images/readme/hero_image.png)

- __*Why Join Us?* Section__

  - This section will give the user more information as to what the group does and the spectrum of activities covered. 
  - The images and icons alongside each section provide visual metaphors for the user and and further encouragement to join the group.

![Why Join Us?](assets/images/readme/why_join_us.png)

- __Continue Exploring section__

  - This section provides links to the other pages, encouraging the user to remain active on the site.
  - It provides a convenient continuation to their journey without having to scroll back up to the Navigation Bar.

![Continue Exploring](assets/images/readme/continue_exploring.png)

- __The Footer__ 

  - The footer section includes a map and directions to Belvoir Park Forest as well as links to the group's social media sites.
  - The footer provides valuable information to the user by means of showing exactly where the group meets and how to get there. 
  - The footer also encourages the user to keep connected and become part of the community via social media.

![Footer](assets/images/readme/footer.png)

- __Events Page - Top__

  - This section of the page is valuable to the user as it highlights the most immediate and specific events taking place.
  - This section also provides the user with a link to the forest map so they can identified specific locations mentioned.
  - The specific events highlighted will be updated to keep them up-to-date and relevant for the user.

![Events](assets/images/readme/events_top.png)

- __Events Page - Bottom__

  - This section of the page is valuable to the user in giving a more general overview of each month's activities.
  - As with the *Why Join Us?* section, relevant images and icons provide cues and a more visually appealing experince for the user.
  - The icons used are consistent with those in the *Why Join Us?* section to provide coherence of theme and message.

![Events](assets/images/readme/events_bottom.png)

- __Contact Page__

  - This page will allow the user to provide personal details in order to become a member of *Friends of Belvoir Park*.
  - This page also allows the member to gain more information about the group.
  - The checkboxes allow them to specify which information they would like to recieve from the group.
  - An 'Additional Comments' textbox allows the user to provide specific questions/requests to the group.
  - A confirmation message displays when the form submission is successful, before returning the user to the home page.

![Contact Page](assets/images/readme/contact.png)

- __Confirmation Page__

  - This page only displays in the event that the user succefully submits info via the Contact form.
  - This page acts as feedback that the information has been received sucessfully.
  - After 10 seconds of display the user will be returned to the Home page
  - If the auto-refresh feature fails to initialise the user can click a link to return to the Home page

![Confirmation Page](assets/images/readme/confirmation.png)


### Features to Implement

The following are ideas which can be implemented into the site at a later time (when skillset allows):
- Add a page (Gallery) to show the latest photos from the group's activities, including a linked preview to their Instagram account.
- Add an embedded calendar on the Events page to show specific dates for at least one year ahead.

## Testing

- This site has been tested for responsiveness across different screen sizes by utilizing Google Chrome's developer tools. The following link provides a [Responsive Preview](https://ui.dev/amiresponsive?url=https://ndsurgenor.github.io/friends-of-belvoir-park/) of various screen sizes.
- This site has been tested for responsiveness in 'real-world' contexts by viewing the site on widescreen desktop and laptop setups, medium-screen tablets, and smaller-screen smartphone devices.
- This site has also been tested for responsiveness on various browsers including Chrome, Firefox, Edge and Safari.
- Navigational links have been tested to ensure that they direct to the correct page, and in the case of external links that they open in a new tab.
- Paragraph text and any accompanying images have been tested to ensure that they resize/reorder correctly at various screen sizes.
- The Contact page form has been tested to ensure that required fields are complete when the submit button is clicked.
- The Email field within the form has been tested to ensure that an email address is provided (i.e. the text includes an @ symbol) when the submit button is clicked.

### Validator Testing 

- HTML: No errors were returned when passing each HTML page through the official W3C HTML validator
  - [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2Findex.html)
  - [events.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2Fevents.html)
  - [contact.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2Fcontact.html)
  - [confirmation.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2Fconfirmation.html)
- CSS: No errors were found when passing 'style.css' through the official [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fndsurgenor.github.io%2Ffriends-of-belvoir-park%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Accessibility: A high accessibility score of 97/100 was confirmed using Lighthouse in Chrome Developer Tools for both mobile and desktop sites.

  ![Accessibility Report](assets/images/readme/lighthouse.png)

### Fixed Bugs

- The *Why Join Us?* section of index.html did not intially show content in the correct order when using smaller screen sizes. This was solved by reordering the content within the code then floating the contents right as well using a series of nested divs.

### Unfixed Bugs

- In the Contact form, checkboxes sometimes display in a staggered manner for screens 900px and above, depending on the browser and version used. The staggered layout can be corrected using the 'display' attribute, but this creates a new layout problem for those screens where there was none before; specifically, checkbox options overlap with one another rendering them unreadable. As such, the former of these layouts has been chosen as the better outcome of said problem. 
- Also regarding checkboxes, at least one checkbox should be required before the form is submitted; however, giving a checkbox the attribute 'required' causes the browser to require that one particular box and not just any within the same group. Searching online suggests that this issue is resolved using a JavaScript query so this bug can be fixed once my skillset allows.

## Deployment

A live link to the site can be found here: https://ndsurgenor.github.io/friends-of-belvoir-park 

- This site was deployed to GitHub pages. Steps for deployment are as follows: 
  - In the GitHub repository, navigate to the Settings tab (top right)
  - From the options in the lefthand side menu, select Pages
  - From the Branch section drop-down menus, select 'main' and '/root' then click 'Save'
  - The page will be automatically refreshed (after a short period) to indicate the successful deployment.

## Credits 

### Content 

- Wireframe protype designed using [Uizard.io](https://uizard.io/)
- Button icons provided by [Font Awesome](https://fontawesome.com/)
- Favicon created using [favicon.io](https://favicon.io/)
- README.md file adapted from the Code Institute README.md template

### Media

- The photos used throughout the site were taken from [Pexels](https://pexels.com); specifically, the following photographers should be credited:
  - Any Lane: [family.jpg](https://www.pexels.com/photo/family-visiting-tree-farm-and-walking-among-pines-5728297/)
  - Ekaterina Bolovtsova: [be-green.jpg](https://www.pexels.com/photo/scouts-collecting-rubbish-in-a-forest-5036781/)
  - Humphrey Muleba: [be-active.jpg](https://www.pexels.com/photo/woman-and-dog-walking-at-woods-1612847/)
  - Matheus Bertelli: [be-inspired.jpg](https://www.pexels.com/photo/photo-of-man-sitting-in-front-3321796/)
      & [event-inspired.jpg](https://www.pexels.com/photo/photo-of-people-sitting-on-chairs-3321789/)
  - Michael Burrows: [event-social.jpg](https://www.pexels.com/photo/chemex-coffeemaker-with-cup-placed-on-terrace-with-metal-kettle-and-hand-grinder-7125621/)
  - PNW Production: [be-social.jpg](https://www.pexels.com/photo/people-hiking-in-a-forest-7624986/)
  - Ron Lack: [event-green.jpg](https://www.pexels.com/photo/happy-woman-doing-an-environmental-cleanup-9543745/)
  - Tatiana Syrikova: [event-active.jpg](https://www.pexels.com/photo/anonymous-man-with-baby-on-shoulders-walking-away-3932687/)
  - Tobias Aeppli: [hero-image.jpg](https://www.pexels.com/photo/trees-1125265/)