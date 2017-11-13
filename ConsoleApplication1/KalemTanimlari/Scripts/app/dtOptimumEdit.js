function dtOptimumInLineEdit(oTable, postUrl) {
    var nEditing = null;
    var oEditing = null;
    var row_cell;
    var col_cell;
    var posted = false;

    $(document).on('click', function (e) {
        if ($(e.target).closest("#" + $(oTable).attr('id')).length === 0) {
            if (nEditing)
                restoreRow(oTable, nEditing);
        }
    });

    //row/column indexing is zero based
    $("#" + $(oTable).attr('id') + " thead tr th").click(function () {

        col_num = parseInt($(this).index());
        // console.log("column_num =" + col_num);
    });


    $("#" + $(oTable).attr('id') + " tbody tr td").click(function () {

        if (nEditing !== null) {
            if (col_cell !== parseInt($(this).index()) || row_cell !== parseInt($(this).parent().index())) {

                saveRow(oTable, nEditing);
                nEditing = null;
            }
        }

        col_cell = parseInt($(this).index());
        row_cell = parseInt($(this).parent().index());

        // console.log("Row_num =" + row_cell + "  ,  column_num =" + col_cell);
    });


    $("#" + $(oTable).attr('id') + ' tbody tr').on('click', function (e) {
        if (posted) return;
        e.preventDefault();

        // Düzenlemek istenilen satır ve hücrel
        var nRow = $(this)[0];
        var jqTds = $('>td', nRow);
        var nCol = jqTds[col_cell]


        // Hücre Düzenlenebilinir mi?
        var inEdit = cols[col_cell].inEdit;
        if (!inEdit) {
            if (nEditing !== null) restoreRow(oTable, nEditing);
            return;
        }

        ////DÜZENLENEN HÜCRE
        //var edTds = $('>td', nEditing);
        //var eCol = edTds[col_cell]

        if (jqTds[col_cell].innerHTML.indexOf("<input") < 0
            && jqTds[col_cell].innerHTML.indexOf("<select") < 0) {

            if (nEditing !== null) {

                /* Currently editing - but not this row - restore the old before continuing to edit mode */

                saveRow(oTable, nEditing);

                nEditing = nRow;
                editRow(oTable, nRow);
            }
            else {

                /* No edit in progress - let's start one */
                nEditing = nRow;
                editRow(oTable, nRow);
            }
        }
    });

    $("#" + $(oTable).attr('id') + ' tbody tr').keydown(function (event) {

        if (event.keyCode === 27) {
            event.preventDefault();
            restoreRow(oTable, nEditing);
        }
        if (event.keyCode === 13) {
            event.preventDefault();

            if (nEditing === null)
                alert("Select Row");
            else
                saveRow(oTable, nEditing);
            nEditing = null;
        }
        /* Editing this row and want to save it */


    });

    function restoreRow(oTable, nRow) {
        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);

        var sType = cols[col_cell].sType;

        for (var i = 0, iLen = jqTds.length ; i < iLen ; i++) {
            oTable.fnUpdate(aData[cols[i].mDataProp], nRow, i, false);

            //  alert(cols[i].mDataProp);

        }
        //// alert(sType);
        // switch (sType) {
        //     case "autonumeric":
        //         $('#typ').autoNumeric('destroy');
        //         break;

        //     case "datepicker":

        //         $('#example .typ').datepicker("destroy");
        //         break;
        //     case "typeahead":
        //         $('#typ').typeahead('destroy');
        //         break;
        //     default:
        //         break;
        // }

        $('#typ').autoNumeric('destroy');
        $('#typ').typeahead('destroy');
        $('#typ').select2('destroy');
        $('#typ').iCheck('destroy');
        $('.typ').clockpicker('destroy');
        $("#" + $(oTable).attr('id') + ' .typ').datepicker("destroy");
        $("#typ").select2('destroy');
        $('#typ').bootstrapToggle('destroy');


        nEditing = null;
    };

    function editRow(oTable, nRow) {

        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);
        var sType = cols[col_cell].sType;

        switch (sType) {
            case "autonumeric":
                jqTds[col_cell].innerHTML = '<input type="text" id ="typ" class="form-control DTautonumeric" value="' + aData[cols[col_cell].mData] + '"/>';
                $('.DTautonumeric').autoNumeric('init');
                break;

            case "datepicker":



                var DTDate = '<div class="input-group date typ">';

                DTDate += '<input type="text" id ="typ" size="16" class="form-control"/>';
                DTDate += '<span class="input-group-addon"><i class="fa fa-calendar"></i></span>';
                DTDate += '</div>';
                jqTds[col_cell].innerHTML = DTDate;

                $("#" + $(oTable).attr('id') + ' .typ').datepicker({
                    keyboardNavigation: true,
                    forceParse: false,
                    clearBtn: true,
                    calendarWeeks: true,
                    autoclose: true,
                    todayBtn: true,
                    todayHighlight: true,
                    language: "tr",
                    immediateUpdates: true,
                });
                $("#" + $(oTable).attr('id') + ' .typ').datepicker("setDate", new Date(aData[cols[col_cell].mData]));

                break;

            case "clockpicker":

                var clock = ' <div class="input-group clockpicker typ" data-autoclose="true">';
                clock += '<input  id ="typ" type="text" data-mask="99:99" class="form-control" value="' + aData[cols[col_cell].mData] + '">';
                clock += '<span class="input-group-addon">';
                clock += '<span class="fa fa-clock-o"></span>';
                clock += '</span>';
                clock += '</div>';

                jqTds[col_cell].innerHTML = clock;

                $('.typ').clockpicker({

                    donetext: 'Seç'
                });
                break;


            case "typeahead":
                jqTds[col_cell].innerHTML = '<input type="text" id ="typ" class="form-control" value="' + aData[cols[col_cell].mData] + '"/>';
                $('#typ').typeahead(null, cols[col_cell].func);
                break;


            case "inputmask":

                jqTds[col_cell].innerHTML = '<input type="text" id ="typ" data-mask="' + cols[col_cell].mask + '" class="form-control" value="' + aData[cols[col_cell].mData] + '"/>';

                break;

            case "select2":
                jqTds[col_cell].innerHTML = '<select id="typ"><></select>';

                $("#typ").select2(cols[col_cell].func);
                $('#typ').html("<option value='" + aData[cols[col_cell].mData] + "'>" + aData[cols[col_cell].displayValue] + " </option>");

                break;
            case "dropdownlist":
                jqTds[col_cell].innerHTML = "";
                var list = cols[col_cell].itemArray;

                var s = $('<select id="typ" />');

                for (var val in list) {
                    $('<option />', { value: val, text: list[val].Text }).appendTo(s);

                }
                s.appendTo(jqTds[col_cell]);

                if (!cols[col_cell].search) {
                    $("#typ").select2({
                        minimumResultsForSearch: Infinity,
                        width: '100%',

                    });
                } else {
                    $("#typ").select2({
                        width: '100%',
                    });
                }
                $('#typ').val(aData[cols[col_cell].mData]).trigger('change.select2');
                break;
            case "i-checks":

                jqTds[col_cell].innerHTML = '<input type="checkbox" id ="typ" class="i-checks"> </label>';
                $("#typ").prop("checked", aData[cols[col_cell].mData]);

                $('#typ').iCheck({
                    checkboxClass: 'icheckbox_square-green',
                    radioClass: 'iradio_square-green',
                });
                break;

            case "bootstrapToggle":


                jqTds[col_cell].innerHTML = '<input id="typ" type="checkbox" data-toggle="toggle">';
                if (aData[cols[col_cell].mData])
                    $("#typ").attr('checked', true);

                $('#typ').bootstrapToggle({
                    on: "Evet",
                    off: "Hayır",
                    onstyle: "primary",
                    offstyle: "danger",
                    size: "small"

                });


                $('#typ').prop('checked', aData[cols[col_cell].mData]).change();
                break;


            default:
                jqTds[col_cell].innerHTML = '<input type="text" id ="typ" class="form-control" value="' + aData[cols[col_cell].mData] + '"/>';
                break;
        }


        $("#typ").focus();
    };

    function saveRow(oTable, nRow) {

        if (posted) return;
        haveChnage = false;
        var jqInputs = $('input', nRow);
        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);
        var sType = cols[col_cell].sType;
        var oldvalue = aData[cols[col_cell].mData];
        var newvalue;
        switch (sType) {
            case "autonumeric":
                newvalue = $("#typ").autoNumeric('get');
                oTable.fnUpdate(newvalue, row_cell, col_cell, false);
                break;
            case "select2":


                newvalue = $("#typ option:selected").val();
                var txtvalue = $("#typ option:selected").text();

                aData[cols[col_cell].displayValue] = txtvalue;
                oTable.fnUpdate(newvalue, row_cell, col_cell, false);

                break;
            case "datepicker":
                newvalue = $("#" + $(oTable).attr('id') + ' .typ').data('datepicker').getFormattedDate('yyyy-mm-dd') + "T00:00:00";

                oTable.fnUpdate(newvalue, row_cell, col_cell, false);
                break;

           

            case "clockpicker":
                newvalue = $("#typ").val();
                oTable.fnUpdate(newvalue, row_cell, col_cell, false);
                break;
            case "maskedit":

                newvalue = $('#typ').val();
                oTable.fnUpdate(newvalue, row_cell, col_cell, false);

                break;
            case "i-checks":
                newvalue = false;
                if ($('#typ').is(":checked")) {
                    newvalue = true;
                }

                oTable.fnUpdate(newvalue, row_cell, col_cell, false);
                break;

            case "bootstrapToggle":

                newvalue = false;
                if ($('#typ').is(":checked")) {
                    newvalue = true;
                }

                oTable.fnUpdate(newvalue, row_cell, col_cell, false);

                break;
            default:
                newvalue = $("#typ").val();
                oTable.fnUpdate(newvalue, row_cell, col_cell, false);

                break;
        };

        var postData = oTable.fnGetData(row_cell);

        if (postUrl !== null && postUrl !== "")
            if ($.trim(oldvalue) !== $.trim(newvalue)) {
                alert("post");
                posted = true;
                // AJAX metotu ile verileri gönderir
                $.ajax({
                    type: "POST",
                    url: postUrl,
                    data: aData,
                    success: function (result) {
                        posted = false;
                        if (result !== "OK") {

                            oTable.fnUpdate(aData, row_cell);
                            alert(result);
                        }


                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        posted = false;
                        oTable.fnUpdate(aData, row_cell);
                        alert(xhr.status + " >>>> " + thrownError);

                    }
                });
            }
        //  oTable.fnUpdate(aData, row_cell);   // Hata durumunda geri dön

    }

}