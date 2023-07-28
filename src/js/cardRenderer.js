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
  console.log(rawData);
  return Mustache.render(
    `
  {{#data}}

    <div class="main-card-container col-md-6 col-lg-3 mb-2">
      <div class="question-card">
        <div class="card-front {{slug}}">
          <div class="card-number">{{id}}</div>
        </div>
        <div class="card-back scroll">
          <div class="card-number">{{id}}</div>
          {{#important}}
          <span class="card-important"><i class="fas fa-star"></i></span>
          {{/important}}
          <h2>{{title}}</h2>
          <div class="card-score">
            <p>{{description}}</p>
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
