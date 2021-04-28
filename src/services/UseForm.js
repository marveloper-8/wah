import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { addValue } from "../redux/actions/appItems";

const UseForm = (initialValues) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    dispatch(addValue(values))
  }, [dispatch, values])

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

const mapStateToProps = (state) => ({
  // initialValues: state.app_items.values,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UseForm)
