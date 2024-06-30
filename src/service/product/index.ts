
export async function getProduct() {
  const response = await fetch('https://saman67.github.io/stackline-assessment/data/stackline_frontend_assessment_data_2021.json');
  return await response.json();
}
