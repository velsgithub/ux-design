export const getPersonDetails = () => {
    return {
        name: 'Mark Zuckerberg',
        email: 'markzuckerberg@facebook.com',
        mobile: '044 234232423',
        address: '420 Grand avenue',
        city: 'California',
        state: 'IL',
        zipCode: '12345',
        profileUrl: `${process.env.PUBLIC_URL}/images/person.png`
    }
}