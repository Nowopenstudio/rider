import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
export const myStructure = (S: any, context: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .child(S.document().title("Homepage").schemaType('home').documentId('home')),
      S.listItem()
        .title('Building')
        .child(S.document().title("Building").schemaType('building').documentId('building')),
       S.listItem()
        .title('Residences')
        .child(S.document().title("Residences").schemaType('residences').documentId('residences')),
        S.listItem()
        .title('Amenities')
        .child(S.document().title("Amenities").schemaType('amenities').documentId('amenities')),
      S.listItem()
        .title('Location')
        .child(S.document().title("Location").schemaType('location').documentId('location')),
      S.listItem()
        .title('Creators')
        .child(S.document().title("Creators").schemaType('creators').documentId('creators')),
      S.listItem()
        .title('Team')
        .child(S.document().title("Team").schemaType('team').documentId('team')),
      S.listItem()
        .title('Brokers')
        .child(S.document().title("Brokers").schemaType('brokers').documentId('brokers')),
      S.listItem()
        .title('Cipres')
        .child(S.document().title("Cipres").schemaType('cipres').documentId('cipres')),
      S.divider(),
      S.listItem()
        .title('Map')
        .child(S.document().title("Map").schemaType('map').documentId('map')),
      S.listItem()
        .title('Footer')
        .child(S.document().title("Footer").schemaType('footer').documentId('footer')),
       S.listItem()
        .title('Settings')
        .child(S.document().title("Settings").schemaType('settings').documentId('settings')),





      ...S.documentTypeListItems().filter(listItem => !['cipres','amenities','mux.videoAsset','building','residences','location','creators','team','brokers','map','footer','settings'].includes(listItem.getId())),




    ])