import Mustache from "mustache";

/**
 * Render the client side template
 * @param {data} rawData object
 * @returns string <the rendered HTML template>
 */
function renderUserView(rawData) {
  const data = rawData.map((category) => {
    category.slug = "";
    if (category.categoryName) {
      category.slug = category.categoryName.toLowerCase().replace(" ", "-");
    }
    return category;
  });
  return Mustache.render(
    `
  {{#data}}

    <div class="main-card-container col-md-6 col-lg-3 mb-2">
      <div class="question-card">
         <div class="card-front d-flex justify-content-center align-items-center {{slug}}">
          <div class="card-number d-flex justify-content-center align-items-center">
            <span>{{id}}</span>
          </div>
        </div>
        <div class="card-back scroll">
          <h2>{{name}}</h2>
          <h4>{{location}}</h4>
          <h5>{{age}}, {{gender}}</h5>
          <div class="card-score border border-3">
            <p>{{description}}</p>
          </div>
          {{#image}}
          <div>
            <img class="rounded border shadow" style="width:40%" src="img/{{image}}" alt="{{name}}"/>
          </div>
          {{/image}}
          <div>
            {{#more_info_link}}
            <p><a href="{{more_info_link}}" class="btn btn-primary stretched-link">More Info</a></p>
            {{/more_info_link}}
          </div>
        </div>
      </div>
    </div>

  {{/data}}
  `,
    { data: rawData },
  );
}

export { renderUserView };
