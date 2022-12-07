import { useLocation, useParams } from "react-router";

export function useCreateQuery(props) {
  //! Props type: Object
  const params = new URLSearchParams(props).toString();
  const query = `?${params}`;
  return query;
}

export function useQuery() {
  const location = useLocation()
  return location.search;
}

export function useRoute() {
  const location = useLocation()
  return location.pathname;
}

// export function useParam(props) {
//   const {props} = useParams()
//   return p;
// }