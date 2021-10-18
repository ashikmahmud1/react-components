import React from "react";
import DataTable from "../DataTable";

export default class DataTableExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {title: "Id", accessor: "id", index: 0},
                {
                    title: "Profile", accessor: "profile", width: 80, index: 1, cell: {
                        type: "image",
                        style: {
                            width: "50px"
                        }
                    }
                },
                {title: "Name", accessor: "name", width: 300, index: 2},
                {title: "Age", accessor: "age", index: 3},
                {title: "Qualification", accessor: "qualification", index: 4},
                {
                    title: "Rating", accessor: "rating", width: 200, index: 5, cell: row => (
                        <div className="rating">
                            <div style={{
                                backgroundColor: "lightskyblue",
                                textAlign: "center",
                                height: "1.9em",
                                width: (row / 5) * 201 + "px",
                                margin: "3px 0 4px 0"
                            }}>
                                {row}
                            </div>
                        </div>
                    )
                }
            ],
            data: [
                {id: 1, name: "a", age: 29, qualification: "B.Com", rating: 3, profile: "https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                {id: 1, name: "a", age: 35, qualification: "B.Sc", rating: 3, profile: "https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                {id: 1, name: "a", age: 42, qualification: "B.E", rating: 3, profile: "https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
            ]
        };
    }

    render() {
        return (
            <>
                <DataTable className="data-table"
                           title="USER PROFILE"
                           keyField="id"
                           pagination={{
                               enabled: true,
                               pageLength: 5,
                               type: "long"
                           }}
                           width="100%"
                           headers={this.state.headers}
                           data={this.state.data}
                           noData="No records!"
                />
            </>
        )
    }
}
