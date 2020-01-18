self.addEventListener('fetch', event => {
  if (/\.jpg$|.png$|.gif$|.webp$/.test(event.request.url)) {
    const connection = navigator.connection.effectiveType;
    let imageQuality;
    switch (connection) {
      case '4g':
        imageQuality = 'q_auto:good';
        break;
      case '3g': 
        imageQuality = 'q_auto:eco';
        break;
      case'2g':
      case 'slow-2g':
        imageQuality = 'q_auto:low';
        break;
      default:
        'q_auto:best';
        break;
    }
    const format = 'f_auto';

    console.log(new Date())
    const imageURLParts = event.request.url.split('/');
    imageURLParts.splice(imageURLParts.length - 2, 0, `${imageQuality},${format}`);
    const finalImageURL = new URL(imageURLParts.join('/'));
    console.log(finalImageURL)
    event.respondWith(
      fetch(finalImageURL.href, { headers: event.request.headers })
    );
  }
});
