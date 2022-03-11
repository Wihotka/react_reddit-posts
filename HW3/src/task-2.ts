interface HometaskInterface {
    howIDoIt: string,
    someArray: (string | number)[],
    withData: object,
}

const MyHometask: HometaskInterface = {
    howIDoIt: 'I Do It Well',
    someArray: ['string one', 'string two', 42],
    withData: [{ howIDoIt: 'I Do It Well', someArray: ['string one', 23] }],
}
