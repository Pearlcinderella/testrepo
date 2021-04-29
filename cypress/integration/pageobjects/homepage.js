class homepage
{
getEditBox()
{
    return cy.get('input[name="name"]:nth-child(2)')
}
//objetcs we define here, wnat to make availabke for your frame works..we use export



getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}
    getGender()
{
    return cy.get('select')
}
getEntrepreneur()
{
    cy.get('#inlineRadio3')
}
getShopTab()
{
    return cy.get('nth-child(2)')
}



}

export default homepage;
