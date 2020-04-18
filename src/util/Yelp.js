const apiKey = '63h9DgR-UVHpSuojUZ2uGSZdhOv-hkA3_u41bYIp5mBwEEVT_mn15p6fdzfFdy5o3UxKkCcOoKdEhf6nO-X8Gb1UBH8wHMF4ZA-rqQGzKhpSvQ3inBxjqPlbfPuOXnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers: {Authorization:`Bearer ${apiKey}`}
  }).then((response) => {console.log(response);return response.json();
  }).then(jsonResponse => {
        if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
              return {

              id: business.id,
              imgSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          }); //end of map
        } //end of if
      }); //end of then
    } //end of search Yelp
}
export default Yelp;
