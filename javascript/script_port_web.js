

//  ปล.ใช้ extension auto comment เอา ##############################################################


class StickyNavigation {
	
  /**
   * The constructor function initializes variables and sets up event listeners for tab clicks,
   * scrolling, and window resizing.
   * 
   * ปิดหน้าต่าง tab 
   */
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      let self = this;
      $('.et-hero-tab').click(function() { 
        self.onTabClick(event, $(this)); 
      });
      $(window).scroll(() => { this.onScroll(); });
      $(window).resize(() => { this.onResize(); });
    }
    
  /**
   * The function scrolls the page to a specific element when a tab is clicked.
   * event - The event parameter is the event object that is triggered when the tab is clicked. It
   * contains information about the event, such as the target element and any additional data associated
   * with the event.
   * element - The `element` parameter is the tab element that was clicked. It is typically an
   * HTML element, such as a button or a link, that triggers the tab click event.
   * 
   * ปรับเลื่อนตามเมาส์
   */
    onTabClick(event, element) {
      event.preventDefault();
      let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
      $('html, body').animate({ scrollTop: scrollTop }, 600, () => {
        this.checkTabContainerPosition();
      });
    }
    
  /**
   * The function onScroll() checks the position of the tab container and finds the current tab selector.
   * 
   * ตรวจตำแหน่งScroll
   */
    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }
    
  /**
   * The function `onResize` checks if a current ID exists and then sets the CSS for a slider.
   */
    onResize() {
      if(this.currentId) {
        this.setSliderCss();
      }
    }
    
  /**
   * The function checks the position of a tab container and adds or removes a CSS class based on the
   * scroll position.
   */
    checkTabContainerPosition() {
      let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
      if($(window).scrollTop() > offset) {
        $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
      } 
      else {
        $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
      }
    }
    
  /**
   * The function finds the current tab selector based on the scroll position of the window.
   * element - The `element` parameter is not used in the code snippet provided. It is not
   * necessary for the `findCurrentTabSelector` function.
   */
    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $('.et-hero-tab').each(function() {
        let id = $(this).attr('href');
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if(this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
    
  /**
   * The function sets the width and left position of a slider element based on the width and offset of a
   * current tab element.
   */
    setSliderCss() {
      let width = 0;
      let left = 0;
      if(this.currentTab) {
        width = this.currentTab.css('width');
        left = this.currentTab.offset().left;
      }
      $('.et-hero-tab-slider').css('width', width);
      $('.et-hero-tab-slider').css('left', left);
    }
    
  }
  
new StickyNavigation();
  



class onetapToOpenImage {

  showImageClick = document.getElementById("clickMeImage");
  myImage = document.getElementById("imageURL");

  /**
 * Initialize the constructor.
//  * @param {type} paramName - description of parameter
//  * @return {type} description of return value
 */
  constructor() {
      this.showImageClick.addEventListener("click", () => {
          this.myImage.style.display = "block";
      });
  }
}
// Instantiate the class
new onetapToOpenImage();




