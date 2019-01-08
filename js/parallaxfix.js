if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    if (this.iosFix) {
      if (!this.imageSrc) {
        var img = this.$element.find('>.parallax-slider>img');
        if (img.length == 1) {
          this.imageSrc = img[0].currentSrc || img.attr('src');
          this.$element.find('>.parallax-slider').remove();
        }
      }
      if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
    }
    return this;
  }
  
  if (navigator.userAgent.match(/(Android)/)) {
    if (this.androidFix) {
      if (!this.imageSrc) {
        var img = this.$element.find('>.parallax-slider>img');
        if (img.length == 1) {
          this.imageSrc = img[0].currentSrc || img.attr('src');
          this.$element.find('>.parallax-slider').remove();
        }
      }
      if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
    }
    return this;
  }