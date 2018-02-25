const URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:';
const API_KEY = 'AIzaSyCnNP1g1nyTkcW6BjorD93gN-ueMhUWg0I';

export function search(subject, startIndex) {
  const url = `${URL}${subject}&startIndex=${startIndex}&orderBy=newest&key=${API_KEY}`;
  return fetch(url).then(response => {
    response = response.json();
    return response;
  });
  
}


// &maxResults=${maxResults}

// {
//   "kind": "books#volumes",
//   "totalItems": 597,
//   "items": [
//       {
//           "kind": "books#volume",
//           "id": "2qg1DwAAQBAJ",
//           "etag": "/X+AGZsLFRU",
//           "selfLink": "https://www.googleapis.com/books/v1/volumes/2qg1DwAAQBAJ",
//           "volumeInfo": {
//               "title": "Canine and Feline Geriatric Oncology",
//               "subtitle": "Honoring the Human-Animal Bond",
//               "authors": [
//                   "Alice Villalobos"
//               ],
//               "publisher": "John Wiley & Sons",
//               "publishedDate": "2017-11-29",
//               "description": "Canine and Feline Geriatric Oncology: Honoring the Human-Animal Bond, Second Edition provides a complete clinical approach to the most common neoplasias in geriatric dogs and cats. Provides the tools needed to diagnose and treat aging pets with cancer and to help clients make the best decisions for themselves and their animals Addresses the \"what-ifs\" that often arise during interactions with clients of aging pets with cancer and helps to determine when a pet should enter the hospice phase Features many vignettes and real-life case studies to demonstrate the issues faced by clinicians and owners dealing with older dogs and cats with cancer and end-of-life issues Fully updated and expanded with new and revised information, including new knowledge on palliative and hospice care and self-care techniques for carers",
//               "industryIdentifiers": [
//                   {
//                       "type": "ISBN_13",
//                       "identifier": "9781119290391"
//                   },
//                   {
//                       "type": "ISBN_10",
//                       "identifier": "1119290392"
//                   }
//               ],
//               "readingModes": {
//                   "text": false,
//                   "image": true
//               },
//               "pageCount": 520,
//               "printType": "BOOK",
//               "categories": [
//                   "Medical"
//               ],
//               "maturityRating": "NOT_MATURE",
//               "allowAnonLogging": false,
//               "contentVersion": "0.1.0.0.preview.1",
//               "panelizationSummary": {
//                   "containsEpubBubbles": false,
//                   "containsImageBubbles": false
//               },
//               "imageLinks": {
//                   "smallThumbnail": "http://books.google.com/books/content?id=2qg1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//                   "thumbnail": "http://books.google.com/books/content?id=2qg1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//               },
//               "language": "en",
//               "previewLink": "http://books.google.com/books?id=2qg1DwAAQBAJ&printsec=frontcover&dq=subject:cats&hl=&cd=1&source=gbs_api",
//               "infoLink": "http://books.google.com/books?id=2qg1DwAAQBAJ&dq=subject:cats&hl=&source=gbs_api",
//               "canonicalVolumeLink": "https://books.google.com/books/about/Canine_and_Feline_Geriatric_Oncology.html?hl=&id=2qg1DwAAQBAJ"
//           },
//           "saleInfo": {
//               "country": "US",
//               "saleability": "NOT_FOR_SALE",
//               "isEbook": false
//           },
//           "accessInfo": {
//               "country": "US",
//               "viewability": "PARTIAL",
//               "embeddable": true,
//               "publicDomain": false,
//               "textToSpeechPermission": "ALLOWED",
//               "epub": {
//                   "isAvailable": false
//               },
//               "pdf": {
//                   "isAvailable": false
//               },
//               "webReaderLink": "http://play.google.com/books/reader?id=2qg1DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
//               "accessViewStatus": "SAMPLE",
//               "quoteSharingAllowed": false
//           }
//       },