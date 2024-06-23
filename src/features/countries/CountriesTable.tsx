import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {FilterMatchMode} from "primereact/api";
import {ICountry} from "../../models/country.model";
import {classNames} from "primereact/utils";
import {Filter} from "./Country";
import {Dropdown} from "primereact/dropdown";


type CountriesTableProps = {
    countries: ICountry[];
    loading: boolean;
    error: any;
    filter: Filter | null;
    setFilter: React.Dispatch<React.SetStateAction<Filter | null>>;
}

const filters = {
    name: {value: "", matchMode: FilterMatchMode.EQUALS},
    capital: {value: "", matchMode: FilterMatchMode.EQUALS},
}

export const CountriesTable = ({countries, loading, error, filter, setFilter}: CountriesTableProps) => {


    const onFilter  = (event) => {
        const filteredField = Object.entries(event.filters)
            .map(([field, { value }]: any) => ({ field, value }))
            .find(({ value }) => value !== '');
        if(filteredField){
            setFilter(filteredField as Filter)
        }else{
            setFilter(null)
        }
    }

    const independentFilterTemplate = () => {
        const handleDropdownChange = (e) => {
            if(e.value !== null){
                setFilter({field: "independent", value: e.value})
            }else{
                setFilter(null);
            }
        };

        const dropdownItems = [
            { label: 'All', value: null },
            { label: 'Independent', value: true },
            { label: 'Not Independent', value: false },
        ];

        return (
            <Dropdown
                options={dropdownItems}
                value={filter?.value}
                onChange={handleDropdownChange}
                placeholder={"Filter by Independent"}
                optionValue={"value"}
            />
        );
    };


    const nameColumnTemplate = (rowData: ICountry) => {
        const editUrl = ``;
        return (
            <Link to={editUrl}>
                {rowData.name.official}
            </Link>
        );
    };


    const isUNMemberTemplate = (rowData: ICountry) => {
        return <i className={classNames('pi',
            {'text-green-500 pi-check-circle': rowData.unMember, 'text-red-500 pi-times-circle': !rowData.unMember})}>
        </i>;
    };

    const isIndependentTemplate = (rowData: ICountry) => {
        return <i className={classNames('pi',
            {'text-green-500 pi-check-circle': rowData.independent, 'text-red-500 pi-times-circle': !rowData.independent})}>
        </i>;
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Countries</span>
            <div className="ms-auto">
                <Button label={"Refresh List"} severity="secondary" raised className="me-5" color="info"
                        onClick={() => {}} disabled={loading}>
                    &nbsp;
                    <i className="pi pi-spin pi-refresg" style={{fontSize: '2rem'}}></i>
                </Button>

            </div>
        </div>
    );


    const currencyColumnTemplate = (rowData: ICountry) => {
        const currencyKeys = Object.keys(rowData.currencies || {});
        const currencyKey = currencyKeys[0];
        const currency = rowData.currencies?.[currencyKey];
        if (currency) {
            return (
                <div>
                    <span>{currency.name}</span>
                    <span>&nbsp;({currency.symbol})</span>
                </div>
            );
        }

        return <span>-</span>;
    };


    return (
        <div>

            <DataTable
                value={countries}  header={header} removableSort   filterDisplay="row"
                paginator totalRecords={countries?.length} rows={20} loading={loading}
                filters={filters} onFilter={onFilter}
                filterDelay={500}
                showGridlines
            >
                <Column field="name" header={"Name"}
                        filter={filter?.field === "name" || !filter} filterPlaceholder={"Search by name"}  showClearButton={false} showFilterMenu={false}
                        body={nameColumnTemplate}
                />

                <Column field="capital"  header={"Capital"}
                        filter={filter?.field === "capital" || !filter} filterPlaceholder={"Search by Capital"}  showClearButton={false} showFilterMenu={false}
                />
                <Column field="flag" header={"Flag"} />
                <Column field="currencies" header={"Currency"} body={currencyColumnTemplate} />
                <Column field="population" header={"Population"} />
                <Column header={"UN Member"} body={isUNMemberTemplate} />
                <Column header={"Independent"}
                        filter={filter?.field === "independent" || !filter} filterElement={independentFilterTemplate}
                        body={isIndependentTemplate}
                />






            </DataTable>
        </div>
    );
};

export default CountriesTable;
