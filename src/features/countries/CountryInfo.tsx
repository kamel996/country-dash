import React from 'react'
import {countryApi} from "../../redux/RTK/country.api";
import {useNavigate, useParams} from "react-router-dom";
import {Card} from "primereact/card";
import {Image} from "primereact/image";
import {Tag} from "primereact/tag";
import {Button} from "primereact/button";

const CountryInfo = () => {
  const {countryName} = useParams();
  const navigate = useNavigate();
  const {data: countries, isFetching, error} = countryApi.useGetSingleCountryQuery(countryName as string);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    // @ts-ignore
    return <div>Error: {error.data.message}</div>;
  }

  const {name, capital, region, subregion, population
    , area, flag, languages, currencies, unMember, independent,startOfWeek, borders} = countries?.[0] || {};

  console.log(borders, "countries")
  return (
      <div className="p-grid p-fluid ">
        <div className="p-col-12 p-md-6">
          <Card title={`${name?.common} ${flag}`} subTitle={`${name?.official} `} style={{minHeight: "100vh"}} >

            <div className="p-grid p-fluid">
              <div className="p-col-12 p-md-6 flex flex-column gap-5">
                <div className="flex flex-row gap-1">
                  <label htmlFor="capital" className="p-col-fixed">
                    <strong>
                      Capital:
                    </strong>
                  </label>
                  <div className="p-col">{capital}</div>
                </div>
                <div className="flex flex-row gap-1">
                  <label htmlFor="region" className="p-col-fixed">
                    <strong>
                      Region:
                    </strong>
                  </label>
                  <div className="p-col">{region}</div>
                </div>
                <div className="flex flex-row gap-1">
                  <label htmlFor="subregion" className="p-col-fixed">
                    <strong>
                      Subregion:
                    </strong>
                  </label>
                  <div className="p-col">{subregion}</div>
                </div>
                <div className="flex flex-row gap-1">
                  <label htmlFor="startOfWeek" className="p-col-fixed">
                    <strong>
                      Start of Week:
                    </strong>
                  </label>
                  <div className="p-col">{startOfWeek}</div>
                </div>
                <div className="flex flex-row gap-1">
                  <label htmlFor="population" className="p-col-fixed">
                    <strong>
                      Population:
                    </strong>
                  </label>
                  <div className="p-col">{population?.toLocaleString()}</div>
                </div>

                <div className="flex flex-row gap-1">
                  <label htmlFor="independent" className="p-col-fixed">
                    <strong>
                      Independent:
                    </strong>
                  </label>
                  <div className="p-col">
                    {independent ? <i className="pi pi-check" style={{fontSize: '1rem', color: "green"}}></i>
                        :
                        <i className="pi pi-times" style={{fontSize: '1.5rem', color: "red"}}></i>
                    }
                  </div>
                </div>

                <div className="flex flex-row gap-1">
                  <label htmlFor="unMember" className="p-col-fixed">
                    <strong>
                      UN Member:
                    </strong>
                  </label>
                  <div className="p-col">
                    {unMember ? <i className="pi pi-check" style={{fontSize: '1rem', color: "green"}}></i>
                        :
                        <i className="pi pi-times" style={{fontSize: '1.5rem', color: "red"}}></i>
                    }
                  </div>
                </div>


                <div className="flex flex-row gap-1">
                  <label htmlFor="area" className="p-col-fixed">
                    <strong>
                      Area:
                    </strong>
                  </label>
                  <div className="p-col">{area}</div>
                </div>
              </div>
              <div className="p-col-12 p-md-6 mt-3 flex flex-column gap-5">
                <div className="flex flex-row gap-1 mt-3">
                  <label htmlFor="languages" className="p-col-fixed">
                    <strong>
                      Languages:
                    </strong>
                  </label>
                  <div className="p-col">
                    {Object.values(languages || {}).map((language, index) => (
                        <Tag className={"mx-2"} key={index} value={language} severity="success" rounded/>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row gap-1">
                  <label htmlFor="currencies" className="p-col-fixed">
                    <strong>
                      Currencies:
                    </strong>
                  </label>
                  <div className="p-col">
                    {Object.values(currencies || {}).map((currency, index) => (
                        <Tag className={"mx-2"} key={index} value={`${currency.name} (${currency.symbol})`}
                             severity="info" rounded/>
                    ))}
                  </div>
                </div>

                {borders && <div className="flex flex-row gap-1 ">
                  <label htmlFor="currencies" className="p-col-fixed">
                    <strong>
                      Borders:
                    </strong>
                  </label>
                  <div className="p-col">
                    {borders.map((border, index) => (
                        <Tag className={"mx-2"} key={index} value={border}
                             severity="info" rounded/>
                    ))}
                  </div>
                </div>}

              </div>
            </div>
            <div className={"flex mt-3"}>
              <div>
                <Button label="Back" icon="pi pi-arrow-left" onClick={() => navigate("/")} />
              </div>
            </div>
          </Card>
        </div>
      </div>
  );
};

export default CountryInfo;
