import React from "react";

const EmployeeTable = () => {


    return (
        <div>
            <div className="w-100">

            </div>
          <table className="table table-hover table-striped table-mobile-responsive table-mobile-sided">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>company</th>
                    <th>location</th>
                    <th>Last Login</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td data-content="Name">Cy Ganderton</td>
                    <td data-content="Job">Quality Control Specialist</td>
                    <td data-content="Company">Littel, Schaden and Vandervort</td>
                    <td data-content="Location">Canada</td>
                    <td data-content="Last login">12/16/2020</td>
                    <td data-content="Favorite Color">Blue</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Zemlak, Daniel and Leannon</td>
                    <td>United States</td>
                    <td>12/5/2020</td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Carroll Group</td>
                    <td>China</td>
                    <td>8/15/2020</td>
                    <td>Red</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Marjy Ferencz</td>
                    <td>Office Assistant I</td>
                    <td>Rowe-Schoen</td>
                    <td>Russia</td>
                    <td>3/25/2021</td>
                    <td>Crimson</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Yancy Tear</td>
                    <td>Community Outreach Specialist</td>
                    <td>Wyman-Ledner</td>
                    <td>Brazil</td>
                    <td>5/22/2020</td>
                    <td>Indigo</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>company</th>
                    <th>location</th>
                    <th>Last Login</th>
                    <th>Favorite Color</th>
                  </tr>
                </tfoot>
              </table>
        </div>
      );
};

export default EmployeeTable;