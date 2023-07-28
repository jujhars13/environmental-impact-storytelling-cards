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
    <div class="category-name" data-category="{{slug}}">
      <h2 class="display-5">{{{categoryName}}}</h2>
    </div>
    {{#cards}}
    <div class="main-card-container col-md-6 col-lg-3 mb-2">
      <div class="question-card">

        <div class="card-front {{slug}}">
          <div class="card-number">{{id}}</div>
          {{#important}}
          <span class="card-important"><i class="fas fa-star"></i></span>
          {{/important}}
          <h2 data-type="title">{{title}}</h2>
          <p class="p-2" data-type="description">{{description}}</p>
          <footer class="card-footer">{{categoryName}}</footer>
        </div>
        <div class="card-back scroll">
          <div class="card-number">{{id}}</div>
          {{#important}}
          <span class="card-important"><i class="fas fa-star"></i></span>
          {{/important}}
          <h2>{{title}}</h2>
          <div class="card-score">
            <p class="card-points high-score">5 points</p>
            <p>{{high_score}}</p>
          </div>
          <div class="card-score ">
            <p class="card-points low-score">1 point</p>
            <p>{{low_score}}</p>
          </div>
        </div>
      </div>
    </div>
    {{/cards}}
  {{/data}}
  `,
    { data: rawData },
  );
}

export { renderUserView };
