const SearchModel=require('../source/models/search')

describe('Twitter Search Model',()=>{
const MOCK_GET_DATA={

}
it('should get all the tweets',()=>{
    let search=new SearchModel({query:''})
    expect(search).toBeDefined();
    expect(MOCK_GET_DATA).toBeDefined();

});
describe('has property getter funct',()=>{
    let search=new SearchModel(MOCK_GET_DATA);
    it('should return message',()=>{
    expect(search.getMessage()).toEqual('')
})
})
});