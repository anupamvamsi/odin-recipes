export class ImageLink {
  srcImage: string;
  altText: string;
  linkToPage: string;

  constructor(src: string, alt: string, link: string) {
    this.srcImage = src;
    this.altText = alt;
    this.linkToPage = link;

    console.log('Image, ', this);
  }
}
