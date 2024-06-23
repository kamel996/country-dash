import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import DataSummaryCard from '../../lib/components/DataSummaryCard';
import {countryApi} from "../../redux/RTK/country.api";
import CountriesTable from "./CountriesTable";
import {Toast} from "primereact/toast";

export type Filter = {
    field: 'name' | 'capital' | 'currency' | 'region' | 'independent' ;
    value: string | boolean;
};

const Country = () => {
    const toast = useRef<Toast>(null);
    const [filter, setFilter] = useState<null | Filter>(null);


    const {data: countries, isFetching, error,refetch} =
        filter
        ?
         filter.field === "independent"
        ?
         countryApi.useGetIndependentQuery(filter.value as boolean)
        :
         countryApi.useGetByFieldQuery({ field: filter.field, value: filter.value as string })
        : countryApi.useGetAllQuery();

    const handleSetFilter = useCallback((filteredField: Filter | null) => {
        setFilter(filteredField);
    }, []);


    const countryStats = useMemo(() => {
        const regionStats = countries?.reduce(
            (acc, country) => {
                acc.population += country.population;
                if (country.independent) acc.independentCount++;
                if (country.unMember) acc.unMemberCount++;

                if (!acc.regions.some((r) => r.label === country.region)) {
                    acc.regions.push({ label: country.region, value: country.region });
                }

                return acc;
            },
            {
                population: 0,
                independentCount: 0,
                unMemberCount: 0,
                regions: [{label: "All", value: ""}],
            }
        );

        return regionStats;
    }, [countries]);

    useEffect(() => {
        if (error) {
            // @ts-ignore
            toast.current?.show({ severity: 'error', summary: 'Error', detail: error?.data?.message , life: 3000 });
        }
    }, [error]);


  return (
    <>
        <Toast ref={toast} />
    <div className='grid'>
        {isFetching ? (
            <i className="pi pi-spin pi-spinner" style={{fontSize: '2rem'}}></i>
        ) : (
            <>
                <DataSummaryCard title="Total Countries" value={countries?.length || 0} />
                <DataSummaryCard title="Total Population" value={countryStats!.population} />
                <DataSummaryCard title="Independent Countries" value={countryStats!.independentCount} positive={false} />
                <DataSummaryCard title="UN Member Countries" value={countryStats!.unMemberCount} />
            </>
        )}
    </div>

      {countries &&
          <CountriesTable
              countries={countries}
              loading={isFetching}
              error={error}
              filter={filter}
              setFilter={handleSetFilter}
              regions={countryStats?.regions}
              refresh={refetch}
          />
      }
    </>
  )
}

export default Country
