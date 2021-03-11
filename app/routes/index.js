import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();
    console.log("data", data);
    return data.map((model) => {
        let { id, attributes } = model; //id and attributes of that model
        let type;
        console.log("\nmodel", model);
        console.log("id", id);
        console.log("attributes", attributes);
  
        if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
          type = 'Community';
        } else {
          type = 'Standalone';
        }
        return { id, type, ...attributes }; //returning new model
      });
  }
}