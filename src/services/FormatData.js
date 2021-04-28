/**
 * Work In Progress
 * @param x
 * @returns {string|*}
 * @constructor
 */

exports.FormatData = (x) => {
  if (x.type === "text") return x.values[0].value;
  if (x.type === "embed") return x.values[0].embed.title;
  if (x.type === "duration") return x.values[0].value;
  if (x.type === "video") return x.values[0].value;
  if (x.type === "location") return x.values[0].value;
  if (x.type === "progress") return x.values[0].value;
  if (x.type === "money") return x.values[0].value;
  if (x.type === "contact") return x.values[0].value.name;
  if (x.type === "member") return x.values[0].value;
  if (x.type === "app") return x.values[0].value.title;
  if (x.type === "date") return x.values[0].start_date;

  if (x.type === "image") {
    let images = [];

    x.values.forEach((image) => {
      if (image.value.link) {
        images.push(image.value.link);
      }
    });
    return images.toString();
  }

  if (x.type === "number") return x.values[0].value;

  if (x.type === "link") {
    let links = [];

    x.values.forEach((link) => {
      links.push(link.embed.url);
    });
    return links.toString();
  }

  if (x.type === "email") {
    let emails = [];

    x.values.forEach((email) => {
      if (email.value) {
        emails.push(email.value);
      }
    });
    return emails.toString();
  }

  if (x.type === "category") {
    return x.values[0].value.text;
  }

  if (x.type === "phone") return x.values[0].value;
  if (x.type === "calculation") return x.values[0].value;
  if (x.type === "tag") return x.values[0].value;
  return "Not formatted";
};

exports.FormatHeader = (x, onCellValueChanged, customData) => {
  if (
    x.type === "text" ||
    x.type === "embed" ||
    x.type === "duration" ||
    x.type === "video" ||
    x.type === "location" ||
    x.type === "progress" ||
    x.type === "money" ||
    // x.type === "contact" ||
    x.type === "member"
  )
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: x.type === "text" ? 400 : 200,
      pivot: true,
      enableRowGroup: true,
      onCellValueChanged,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
    };

  if (x.type === "app")
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 200,
      enableRowGroup: true,
      pivot: true,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      cellRenderer: function (params) {
        if (params.value) {
          return `<a href="${
            window.location.origin +
            "/spaces/app/" +
            params.data._app_id +
            "/" +
            params.data._org_id
          }">${params.value}</a>`;
        }
      },
    };
  if (x.type === "date")
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 300,
      pivot: true,
      onCellValueChanged,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      filter: "agDateColumnFilter",
      cellRenderer: "datePickerRender",
    };
  if (x.type === "image")
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 200,
      pivot: true,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      onCellValueChanged,
    };
  if (x.type === "number")
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 200,
      pivot: true,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      onCellValueChanged,
    };
  if (x.type === "email")
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 200,
      pivot: true,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      onCellValueChanged,
    };

  if (x.type === "category") {
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 200,
      pivot: true,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      onCellValueChanged,
      cellEditorSelector: function (params) {
        let array = [];
        const tData = params.data._category_object.find(
          (element) => element.external_id === params.colDef.field
        );
        const data = tData.config.settings.options;

        data.forEach((option) => {
          array.push(option.text);
        });

        return {
          component: "agRichSelectCellEditor",
          params: {
            values: array,
          },
        };
      },
    };
  }

  if (x.type === "contact") {
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 200,
      pivot: true,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      onCellValueChanged,
      cellEditorSelector: function () {
        return {
          component: "agRichSelectCellEditor",
          params: {
            values: customData,
          },
        };
      },
    };
  }

  if (x.type === "phone")
    return {
      headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 200,
      pivot: true,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      onCellValueChanged,
    };
  if (x.type === "calculation")
    return {
      headerComponentParams: {
        template: `<span> ${x.label} &#169; </span>`,
      },
      // headerName: x.label,
      field: x.external_id,
      sync_type: x.type,
      width: 200,
      pivot: true,
      editable: false,
      allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
      floatingFilter: false,
      onCellValueChanged,
    };

  return {
    headerName: x.label,
    field: x.external_id,
    width: 200,
    allowedAggFuncs: ["sum", "min", "max", "count", "avg"],
    floatingFilter: false,
    pivot: true,
  };
};

exports.isDate = (dateStr) => {
  return !isNaN(new Date(dateStr).getDate());
};
