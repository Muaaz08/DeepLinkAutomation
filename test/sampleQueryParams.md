## Sample Query Params

| Filter Description                                             | HTTP Request                                                                     |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Filter by projectId and status                                 | `http://localhost:5500/?projectId=101&status=Active`                             |
| Filter by region and category                                  | `http://localhost:5500/?region=North&category=Technology`                        |
| Filter by status, category, and subcategory                    | `http://localhost:5500/?status=Pending&category=Science&subcategory=Physics`     |
| Filter by type and feature                                     | `http://localhost:5500/?type=TypeA&feature=Feature1`                             |
| Filter by toggleActive status and region                       | `http://localhost:5500/?toggleActive=true&region=South`                          |
| Filter by category and subcategory, with incorrect subcategory | `http://localhost:5500/?category=Technology&subcategory=NonExistent`             |
| Multiple filters                                               | `http://localhost:5500/?region=West&type=TypeB&category=Business&subcategory=HR` |
| Filter by status, category, and toggleActive                   | `http://localhost:5500/?status=Inactive&category=Technology&toggleActive=false`  |
| Filter by projectId, category, and subcategory                 | `http://localhost:5500/?projectId=104&category=Technology&subcategory=AI`        |
| Filter by projectId and region                                 | `http://localhost:5500/?projectId=110&region=East`                               |
