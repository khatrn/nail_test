/*
 *	jQuery FullCalendar Extendable Plugin
 *	An Ajax (PHP - Mysql - jquery) script that extends the functionalities of the fullcalendar plugin
 *  Dependencies:
 *   - jquery
 *   - jquery Ui
 * 	 - jquery spectrum (since 2.0)
 *   - jquery timepicker (since 1.6.4)
 *   - jquery Fullcalendar
 *   - Twitter Bootstrap
 *  Author: Paulo Regina
 *  Website: www.pauloreg.com
 *  Contributions: Patrik Iden, Jan-Paul Kleemans, Bob Mulder
 *	Version 3.0, February - 2017
 *          3.1.2, February - 2018
 *          3.1.5, September - 2018
 *          3.1.5.2, January - 2019
 *          3.2, September - 2019
 *  Fullcalendar 3.2.0
 *	Released Under Envato Regular or Extended Licenses
 */

!function(y, g) {
    y.fn.extend({
        FullCalendarExt: function(e) {
            var t = "token=" + y("#cal_token").val()
                , a = {
                calendarSelector: "#calendar",
                loadingSelector: "#loading",
                lang: "en",
                token: "",
                startTimeConst: "00:00",
                endTimeConst: "23:59",
                ajaxJsonFetch: "includes/cal_events.php?" + t,
                ajaxUiUpdate: "includes/cal_update.php?" + t,
                ajaxEventQuickSave: "?controller=WorkController&action=addEvent&" + t,
                ajaxEventDelete: "includes/cal_delete.php?" + t,
                ajaxEventEdit: "includes/cal_edit_update.php?" + t,
                ajaxEventExport: "includes/cal_export.php?" + t,
                ajaxRepeatCheck: "includes/cal_check_rep_events.php?" + t,
                ajaxRetrieveDescription: "includes/cal_description.php?" + t,
                ajaxImport: "importer.php?" + t,
                jsonConfig: "includes/form.json",
                modalSelector: "#calendarModal",
                modalPromptSelector: "#cal_prompt",
                modalEditPromptSelector: "#cal_edit_prompt_save",
                formAddEventSelector: "form#add_event",
                formFilterSelector: "form#filter-category select",
                formSearchSelector: "form#search",
                newEventText: "Add New Event",
                successAddEventMessage: "Successfully Added Event",
                successDeleteEventMessage: "Successfully Deleted Event",
                successUpdateEventMessage: "Successfully Updated Event",
                failureAddEventMessage: "Failed To Add Event",
                failureDeleteEventMessage: "Failed To Delete Event",
                failureUpdateEventMessage: "Failed To Update Event",
                generalFailureMessage: "Failed To Execute Action",
                ajaxError: "Failed to load content",
                emptyForm: "Form cannot be empty",
                errorDate: "End time must be greater than start time",
                unableToOpenEvent: "Something went wrong. Unable to open event",
                eventText: "Event: ",
                repetitiveEventActionText: "This is a repetitive event, what do you want to do?",
                isRTL: !1,
                weekNumberTitle: "W",
                defaultColor: "#587ca3",
                weekType: "agendaWeek",
                dayType: "agendaDay",
                listType: "listWeek",
                editable: !0,
                ignoreTimezone: !0,
                lazyFetching: !0,
                filter: !0,
                quickSave: !0,
                navLinks: !0,
                firstDay: 0,
                gcal: !1,
                gcalUrlText: "View on Google",
                version: "modal",
                defaultView: "month",
                aspectRatio: 1.35,
                weekends: !0,
                weekNumbers: !1,
                weekNumberCalculation: "iso",
                hiddenDays: [],
                theme: !1,
                themePrev: "circle-triangle-w",
                themeNext: "circle-triangle-e",
                titleFormatMonth: "",
                titleFormatWeek: "",
                titleFormatDay: "",
                columnFormatMonth: "",
                columnFormatWeek: "",
                columnFormatDay: "",
                timeFormat: "H:mm",
                weekMode: !0,
                allDaySlot: !0,
                allDayText: "all-day",
                axisFormat: "h(:mm)a",
                slotDuration: "00:30:00",
                minTime: "00:00:00",
                maxTime: "24:00:00",
                nextDayThreshold: "00:00:00",
                slotEventOverlap: !0,
                enableDrop: !0,
                enableResize: !0,
                savedRedirect: "index.php",
                removedRedirect: "index.php",
                updatedRedirect: "index.php",
                ajaxLoaderMarkup: '<div class="loadingDiv"></div>',
                prev: "left-single-arrow",
                next: "right-single-arrow",
                prevYear: "left-double-arrow",
                nextYear: "right-double-arrow",
                otherSource: !1,
                modalFormBody: y("#modal-form-body").html(),
                icons_title: !1,
                fc_extend: {},
                eventLimit: !0,
                eventLimitClick: "popover",
                palette: [["#0b57a4", "#8bbdeb", "#000000", "#2a82d7", "#148aa5", "#3714a4", "#587ca3", "#a50516"], ["#fb3c8f", "#1b4f15", "#1b4f15", "#686868", "#3aa03a", "#ff0080", "#fee233", "#fc1cad"], ["#7f2b14", "#000066", "#2b4726", "#fd7222", "#fc331c", "#af31f2", "#fc0d1b", "#2b8a6d"], ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"]]
            }
                , c = y.extend(a, e);
            1 == c.gcal && (c.weekType = "",
                c.dayType = "");
            var r = {}
                , o = {
                locale: c.lang,
                editable: c.editable,
                eventLimit: c.eventLimit,
                eventLimitClick: c.eventLimitClick,
                navLinks: c.navLinks,
                defaultView: c.defaultView,
                aspectRatio: c.aspectRatio,
                weekends: c.weekends,
                weekNumbers: c.weekNumbers,
                weekNumberCalculation: c.weekNumberCalculation,
                weekNumberTitle: c.weekNumberTitle,
                views: {
                    month: {
                        titleFormat: c.titleFormatMonth,
                        columnFormat: c.columnFormatMonth
                    },
                    week: {
                        titleFormat: c.titleFormatWeek,
                        columnFormat: c.columnFormatWeek
                    },
                    day: {
                        titleFormat: c.titleFormatDay,
                        columnFormat: c.columnFormatDay
                    }
                },
                isRTL: c.isRTL,
                hiddenDays: c.hiddenDays,
                theme: c.theme,
                buttonIcons: {
                    prev: c.prev,
                    next: c.next,
                    prevYear: c.prevYear,
                    nextYear: c.nextYear
                },
                themeButtonIcons: {
                    prev: c.themePrev,
                    next: c.themeNext
                },
                allDaySlot: c.allDaySlot,
                allDayText: c.allDayText,
                slotLabelFormat: c.axisFormat,
                slotDuration: c.slotDuration,
                minTime: c.minTime,
                maxTime: c.maxTime,
                slotEventOverlap: c.slotEventOverlap,
                fixedWeekCount: c.weekMode,
                timeFormat: c.timeFormat,
                header: {
                    left: "prev,next",
                    center: "title",
                    right: "month," + c.weekType + "," + c.dayType + "," + c.listType
                },
                monthNames: c.monthNames,
                monthNamesShort: c.monthNamesShort,
                dayNames: c.dayNames,
                dayNamesShort: c.dayNamesShort,
                buttonText: {
                    today: c.today,
                    month: c.month,
                    week: c.week,
                    day: c.day
                },
                ignoreTimezone: c.ignoreTimezone,
                firstDay: c.firstDay,
                lazyFetching: c.lazyFetching,
                selectable: c.quickSave,
                selectHelper: c.quickSave,
                eventStartEditable: c.enableDrop,
                eventDurationEditable: c.enableResize,
                nextDayThreshold: c.nextDayThreshold,
                loading: function(e) {
                    0 == e ? y(c.loadingSelector).hide() : 1 == e && y(c.loadingSelector).show()
                },
                select: function(e, t, a, o) {
                    calendar.view = o.name,
                    "modal" == c.version && (calendar.quickModal(e, t, a),
                        y(c.calendarSelector).fullCalendar("unselect")),
                    "month" !== o.name && moment(e._d).format("HH:mm") !== moment(t._d).format("HH:mm") && (y('#event-type option[value="false"]').prop("selected", !0))
                },
                eventSources: [c.otherSource, {
                    url: c.ajaxJsonFetch
                }],
                eventDrop: function(e) {
                    var t = moment(e.start).format("YYYY-MM-DD")
                        , a = moment(e.start).format("HH:mm")
                        , o = moment(e.end).format("YYYY-MM-DD")
                        , n = moment(e.end).format("HH:mm")
                        , l = moment(e.end).isValid();
                    null === e.end || "null" === e.end || 0 == l ? Eend = t + " " + a : Eend = o + " " + n,
                        EaD = e.allDay;
                    var r = "title=" + encodeURIComponent(e.title) + "&start=" + t + " " + a + "&end=" + Eend + "&id=" + e.id + "&allDay=" + EaD + "&original_id=" + e.original_id;
                    y.post(c.ajaxUiUpdate, r, function(e) {
                        y(c.calendarSelector).fullCalendar("refetchEvents")
                    })
                },
                eventResize: function(e) {
                    var t = moment(e.start).format("YYYY-MM-DD")
                        , a = moment(e.start).format("HH:mm")
                        , o = moment(e.end).format("YYYY-MM-DD")
                        , n = moment(e.end).format("HH:mm")
                        , l = moment(e.end).isValid();
                    null === e.end || "null" === e.end || 0 == l ? (Eend = t + " " + a,
                        EaD = "false") : (Eend = o + " " + n,
                        EaD = e.allDay);
                    var r = "title=" + encodeURIComponent(e.title) + "&start=" + t + " " + a + "&end=" + Eend + "&id=" + e.id + "&allDay=" + EaD + "&original_id=" + e.original_id;
                    y.post(c.ajaxUiUpdate, r, function(e) {
                        y(c.calendarSelector).fullCalendar("refetchEvents")
                    })
                },
                eventRender: function(e, t, a) {
                    if (t.attr("href"))
                        t.attr("data-toggle", "modal"),
                            t.attr("href", "javascript:void(0)"),
                            t.attr("onclick", 'calendar.openModalGcal("' + encodeURI(e.title) + '","' + e.url + '");');
                    else {
                        if (1 == c.icons_title) {
                            var o = t.find(".fc-title").text().replace(/\[(.*?)\]/gi, '<i class="$1"></i>');
                            t.find(".fc-title").html(o)
                        }
                        var n = e.color
                            , l = moment(e.start).format("YYYY-MM-DD")
                            , r = moment(e.start).format("HH:mm")
                            , d = moment(e.end).format("YYYY-MM-DD")
                            , i = moment(e.end).format("HH:mm");
                        if (0 == moment(e.end).isValid())
                            d = l,
                                i = r;
                        null !== e.end && "month" == a.name && ("H:mm" != c.timeFormat && "h:mm" != c.timeFormat || (timeformat = e.start.format("H:mm") + " - " + e.end.format("H:mm"),
                            t.find(".fc-time").html(timeformat))),
                        "modal" == c.version && (t.attr("data-toggle", "modal"),
                            t.attr("href", "javascript:void(0)"),
                            t.attr("data-id", e.original_id),
                            t.attr("data-rep_id", e.id),
                            t.attr("data-title", encodeURIComponent(e.title)),
                            t.attr("data-url", encodeURIComponent(e.url)),
                            t.attr("data-eventstart", e.start),
                            t.attr("data-eventend", e.end),
                            t.attr("data-color", n),
                            t.attr("data-d_startdate", l),
                            t.attr("data-d_starttime", r),
                            t.attr("data-d_enddate", d),
                            t.attr("data-d_endtime", i),
                            t.attr("onclick", "calendar.openModal(this)"))
                    }
                    Object.freeze(calendar)
                }
            }
                , n = y.extend(o, c.fc_extend);
            y(c.calendarSelector).fullCalendar(n),
                calendar.openModal = function(e) {
                    r.id = y(e).data("id"),
                        r.rep_id = y(e).data("rep_id"),
                        r.title = y(e).data("title"),
                        r.url = y(e).data("url"),
                        r.eventStart = y(e).data("eventstart"),
                        r.eventEnd = y(e).data("eventend"),
                        r.color = y(e).data("color"),
                        r.d_startDate = y(e).data("d_startdate"),
                        r.d_startTime = y(e).data("d_starttime"),
                        r.d_endDate = y(e).data("d_enddate"),
                        r.d_endTime = y(e).data("d_endtime"),
                    1 == c.icons_title && (r.title = r.title.replace(/\[(.*?)\]/gi, '<i class="$1"></i>')),
                        r.title = decodeURIComponent(r.title),
                        y("#modal-form-body").hide(),
                        y("#details-body").show(),
                        r.ExpS = r.d_startDate + " " + r.d_startTime,
                        r.ExpE = r.d_endDate + " " + r.d_endTime,
                        y.ajax({
                            type: "POST",
                            url: c.ajaxRetrieveDescription,
                            data: {
                                id: r.id,
                                title: encodeURIComponent(r.title),
                                start: r.d_startDate,
                                mode: "edit"
                            },
                            cache: !1,
                            beforeSend: function() {
                                y(".loadingDiv").show(),
                                    y(".modal-footer").hide()
                            },
                            error: function() {
                                y(".loadingDiv").hide(),
                                    console.log(c.ajaxError)
                            },
                            success: function(e) {
                                if (e) {
                                    y(".loadingDiv").hide();
                                    var t = JSON.parse(e)
                                        , a = t.description.replace("$null", "")
                                        , o = t.color.replace("$null", "")
                                        , n = t.category.replace("$null", "");
                                    r.description_editable = t.description_editable.replace("&amp;", "&"),
                                        r.description = a.replace("&amp;", "&"),
                                        r.category = n.replace("&amp;", "&"),
                                        r.color = o,
                                        r.data = t;
                                    var l = JSON.parse(JSON.stringify(t));
                                    y("#details-body-title").html(r.title),
                                        function(r, d) {
                                            f(d, ["all-day", "categorie", "categories", "category", "color", "description", "description_editable", "end", "start", "id", "repeat_id", "repeat_type", "title", "url", "user_id"]);
                                            var i = "";
                                            y.getJSON(c.jsonConfig).then(function(e) {
                                                if (0 < y(".custom-fields").children().length && 0 < Object.keys(d).length)
                                                    for (var t in Object.keys(d).every(function(e) {
                                                        return "" === d[e] || null === d[e]
                                                    }) || (i = "<hr />"),
                                                        d) {
                                                        var a = d[t]
                                                            , o = [];
                                                        "file" == t && (a = a !== g && "undefined" !== a ? '<a target="_blank" href="' + a + '">' + a + "</a>" : "");
                                                        var n = u(e, "<" + t + ">");
                                                        if (0 < a.length || y.isArray(a) && null !== a)
                                                            if (y.isArray(a) && null !== a) {
                                                                for (var l = 0; l < a.length; l++)
                                                                    o.push(h(e, a[l]));
                                                                i += "<h5><strong>" + n + "</strong></h5><p>" + o.join(", ") + '</p><p class="custom-field-sep" style="margin-bottom: 0; height: 2px;">&nbsp;</p>'
                                                            } else
                                                                i += "<h5><strong>" + n + "</strong></h5><p>" + a + '</p><p class="custom-field-sep" style="margin-bottom: 0; height: 2px;">&nbsp;</p>'
                                                    }
                                                y("#details-body-content").html(r + i)
                                            }).fail(function() {
                                                y("#details-body-content").html(r)
                                            })
                                        }(a, l),
                                        y("#export-event, #delete-event, #edit-event").show(),
                                        y("#save-changes, #add-event").hide(),
                                        y(".modal-footer").show(),
                                        y(c.modalSelector).modal("show")
                                } else
                                    alert(c.unableToOpenEvent)
                            }
                        }),
                        y("#delete-event").off().on("click", function(e) {
                            m(r.id),
                                e.preventDefault()
                        }),
                        y("#export-event").off().on("click", function(e) {
                            p(r.id, r.title, r.ExpS, r.ExpE),
                                e.preventDefault()
                        }),
                        y("#edit-event").off().on("click", function(e) {
                            document.getElementById("modal-form-body").reset(),
                                y("#modal-form-body").html(c.modalFormBody),
                                y("#export-event, #delete-event, #edit-event, #add-event").hide(),
                                y("#save-changes").show().css("width", "100%"),
                                y("#details-body, #event-type-select").hide(),
                                y("#repeat-type-select, #repeat-type-selected").hide(),
                                y("#event-type-selected").show(),
                                y("#modal-form-body").show(),
                                y(c.modalSelector).modal("show"),
                                y("#modal-form-body :input").each(function() {
                                    var e = y(this).attr("name");
                                    switch (y(this)[0].tagName) {
                                        case "SELECT":
                                            (a = r.data[e]) !== g && y('option[value="' + a.replace("&amp;", "&") + '"]').attr("selected", "selected");
                                            break;
                                        case "INPUT":
                                            e = e.replace(/\[.*?\]/g, "");
                                            var t = y(this).attr("type")
                                                , a = r.data[e];
                                            if ("checkbox" == t && a !== g)
                                                for (var o = a, n = 0; n < o.length; n++)
                                                    y('input[value="' + o[n] + '"]').prop("checked", !0);
                                            "radio" == t && a !== g && y('input[value="' + a + '"]').prop("checked", !0),
                                            "file" == t && a !== g && "undefined" !== a && y(this).before('<p class="file-attachment"><a target="_blank" href="' + a + '">' + a + "</a></p>"),
                                            "text" == t && (y('input[name="' + e + '"]').val(r.data[e]),
                                                y("input[name=title]").val(r.data.title),
                                                y("#colorp").spectrum("set", r.data.color),
                                                y("#startDate").val(r.d_startDate),
                                                y("input#startTime").val(r.d_startTime),
                                                y("#endDate").val(r.d_endDate),
                                                y("input#endTime").val(r.d_endTime));
                                            break;
                                        case "TEXTAREA":
                                            a = r.data[e],
                                                y('textarea[name="' + e + '"]').val(a),
                                                y('textarea[name="description"]').val(r.data.description_editable);
                                            break;
                                        default:
                                            y(':input[name="' + e + '"]').val(r.data[e])
                                    }
                                }),
                                y("#save-changes").off().on("click", function(e) {
                                    if (0 == y("input[name=title]").val().length)
                                        alert(c.emptyForm);
                                    else {
                                        editFormData = new FormData;
                                        var t = y("#modal-form-body").serializeArray();
                                        y.each(t, function(e, t) {
                                            if (y.isArray(t.value))
                                                for (var a = 0; a < t.value.length; a++)
                                                    editFormData.append(t.name + "[]", t.value[a]);
                                            else
                                                editFormData.append(t.name, t.value)
                                        });
                                        var a = y("#modal-form-body").find("input[type=checkbox]");
                                        y.each(a, function(e, t) {
                                            y(this).is(":checked") || editFormData.append(y(t).attr("name"), "")
                                        }),
                                        y("#file")[0] && editFormData.append("file", y("#file")[0].files[0]),
                                            l(r.id, editFormData)
                                    }
                                    e.preventDefault()
                                })
                        })
                }
                ,
                calendar.data = function() {
                    return {
                        id: r.id,
                        title: r.title,
                        url: r.url,
                        start: r.eventStart,
                        end: r.eventEnd,
                        description: r.description,
                        color: r.color
                    }
                }
                ,
                calendar.openModalGcal = function(e, t) {
                    y("#modal-form-body").hide(),
                        y("#details-body").show(),
                        y("#details-body-title").html(e),
                        y("#details-body-content").html('<a target="_blank" href="' + t + '">' + c.gcalUrlText + "</a>"),
                        y("#export-event, #delete-event, #edit-event").hide(),
                        y("#save-changes, #add-event").hide(),
                        y(".modal-footer").hide(),
                        y(c.modalSelector).modal("show")
                }
                ,
                calendar.quickModal = function(e, t, a) {
                    document.getElementById("modal-form-body").reset(),
                        y("#modal-form-body").html(c.modalFormBody);
                        var sd = moment(e).format("YYYY-MM-DD") + 'T' + c.startTimeConst;
                        var st = moment(e).format("YYYY-MM-DD") + 'T' + c.endTimeConst;
                        y("#start_date").val(sd),
                        y("#end_date").val(st),
                        y("#details-body").hide(),
                        y("#delete-event, #edit-event, #save-changes").hide(),
                        y("#add-event").show().css("width", "100%"),
                        y(".modal-footer").show(),
                        y("#modal-form-body").show(),
                        y("#details-body-title").html(c.newEventText),
                        y(c.modalSelector).modal("show"),
                        y("#add-event").off().on("click", function(e) {
                            formData = new FormData();
                            0 == y("input[name=work_name]").val().length ? alert(c.emptyForm) :
                                formData.set('work_name',y("input[name=work_name]").val());
                            0 == (y("input[name=end_date]").val() > y("input[name=start_date]").val()) ? alert(c.errorDate) : (
                                formData.set('start_date',y("input[name=start_date]").val()),
                                formData.set('end_date',y("input[name=end_date]").val())
                            );
                            formData.set('status',y("select[name=status]").val());
                            d(formData);
                            e.preventDefault()
                        })
                }
            ;
            var d = function(e) {
                y.ajax({
                    url: c.ajaxEventQuickSave,
                    data: e,
                    type: "POST",
                    cache: !1,
                    processData: !1,
                    contentType: !1,
                    beforeSend: function() {
                        y(".loadingDiv").show(),
                            y(".modal-footer").hide()
                    },
                    error: function() {
                        y(".loadingDiv").hide(),
                        console.log(c.ajaxError)
                    },
                    success: function(e) {
                        y(".loadingDiv").hide(),
                        y(c.modalSelector).modal("hide"),
                        y(c.calendarSelector).fullCalendar("refetchEvents")
                    }
                })
            }
                , l = function(t, a) {
                var e = "id=" + t;
                y.ajax({
                    type: "POST",
                    url: c.ajaxRepeatCheck,
                    data: e,
                    cache: !1,
                    beforeSend: function() {
                        y(".loadingDiv").show()
                    },
                    error: function() {
                        y(".loadingDiv").hide(),
                            console.log(c.ajaxError)
                    },
                    success: function(e) {
                        y(".loadingDiv").hide(),
                            "REP_FOUND" == e ? (y(c.modalSelector).modal("hide"),
                                y(c.modalEditPromptSelector + " .modal-header").html("<h4>" + c.eventText + r.title + "</h4>"),
                                y(c.modalEditPromptSelector + " .modal-body-custom").css("padding", "15px").html(c.repetitiveEventActionText),
                                y(c.modalEditPromptSelector).modal("show"),
                                y('[data-option="save-this"]').unbind("click").on("click", function(e) {
                                    i(t, a),
                                        y(c.modalEditPromptSelector).modal("hide"),
                                        y(c.modalSelector).modal("hide"),
                                        e.preventDefault()
                                }),
                                y('[data-option="save-repetitives"]').unbind("click").on("click", function(e) {
                                    i(t, a, "true"),
                                        y(c.modalEditPromptSelector).modal("hide"),
                                        y(c.modalSelector).modal("hide"),
                                        e.preventDefault()
                                })) : i(t, a)
                    },
                    error: function(e) {
                        alert(c.generalFailureMessage)
                    }
                })
            }
                , i = function(e, t, a) {
                a === g ? editFormData.append("id", e) : (editFormData.append("id", e),
                    editFormData.append("rep_id", r.rep_id),
                    editFormData.append("method", "repetitive_event")),
                    editFormData.append("otitle", r.title),
                    y.ajax({
                        type: "POST",
                        url: c.ajaxEventEdit,
                        data: t,
                        cache: !1,
                        processData: !1,
                        contentType: !1,
                        beforeSend: function() {
                            y(".loadingDiv").show()
                        },
                        error: function() {
                            y(".loadingDiv").hide(),
                                console.log(c.ajaxError)
                        },
                        success: function(e) {
                            y(".loadingDiv").hide(),
                                "" == e ? (y(c.modalSelector).modal("hide"),
                                    y(c.calendarSelector).fullCalendar("refetchEvents")) : alert(c.failureUpdateEventMessage)
                        },
                        error: function(e) {
                            alert(c.failureUpdateEventMessage)
                        }
                    })
            }
                , m = function(a) {
                var t = "id=" + a;
                y.ajax({
                    type: "POST",
                    url: c.ajaxRepeatCheck,
                    data: {
                        id: a
                    },
                    cache: !1,
                    beforeSend: function() {
                        y(".loadingDiv").show()
                    },
                    error: function() {
                        y(".loadingDiv").hide(),
                            console.log(c.ajaxError)
                    },
                    success: function(e) {
                        y(".loadingDiv").hide(),
                            "REP_FOUND" == e ? (y(c.modalSelector).modal("hide"),
                                y(c.modalPromptSelector + " .modal-header").html("<h4>" + c.eventText + r.title + "</h4>"),
                                y(c.modalPromptSelector + " .modal-body").html(c.repetitiveEventActionText),
                                y(c.modalPromptSelector).modal("show"),
                                y('[data-option="remove-this"]').unbind("click").on("click", function(e) {
                                    s(t),
                                        y(c.modalPromptSelector).modal("hide"),
                                        e.preventDefault()
                                }),
                                y('[data-option="remove-repetitives"]').unbind("click").on("click", function(e) {
                                    var t = "id=" + a + "&rep_id=" + r.rep_id + "&method=repetitive_event&delete=yes";
                                    s(t),
                                        y(c.modalPromptSelector).modal("hide"),
                                        e.preventDefault()
                                })) : s(t)
                    },
                    error: function(e) {
                        alert(c.generalFailureMessage)
                    }
                })
            }
                , s = function(e) {
                var t = e + "&title=" + encodeURIComponent(r.title) + "&start=" + r.d_startDate;
                y.ajax({
                    type: "POST",
                    url: c.ajaxEventDelete,
                    data: t,
                    cache: !1,
                    beforeSend: function() {
                        y(".loadingDiv").show()
                    },
                    error: function() {
                        y(".loadingDiv").hide(),
                            console.log(c.ajaxError)
                    },
                    success: function(e) {
                        y(".loadingDiv").hide(),
                            "" == e ? (y(c.modalSelector).modal("hide"),
                                y(c.calendarSelector).fullCalendar("refetchEvents")) : alert(c.failureDeleteEventMessage)
                    }
                })
            }
                , p = function(e, t, a, o) {
                var n = a
                    , l = o
                    , r = "&method=export&id=" + encodeURIComponent(e) + "&title=" + encodeURIComponent(t) + "&start_date=" + encodeURIComponent(n) + "&end_date=" + encodeURIComponent(l);
                window.location = c.ajaxEventExport + r
            };
            calendar.calendarImport = function() {
                txt = "import=" + encodeURIComponent(y("#import_content").val()),
                    y.post(c.ajaxImport, txt, function(e) {
                        alert(e),
                            y(c.calendarSelector).fullCalendar("refetchEvents"),
                            y("#cal_import").modal("hide"),
                            y("#import_content").val("")
                    })
            }
            ;
            var f = function(e, t) {
                for (var a = 0; a < t.length; a++)
                    e.hasOwnProperty(t[a]) && delete e[t[a]]
            };
            if (1 == c.filter) {
                function v() {
                    value = y(c.formSearchSelector + " input").val(),
                        construct = "search=" + encodeURIComponent(value),
                        y.post("includes/loader.php", construct, function(e) {
                            y(c.calendarSelector).fullCalendar("refetchEvents")
                        })
                }
                y(c.formFilterSelector).on("change", function(e) {
                    selected_value = y(this).val(),
                        construct = "filter=" + encodeURIComponent(selected_value),
                        y.post("includes/loader.php", construct, function(e) {
                            y(c.calendarSelector).fullCalendar("refetchEvents")
                        }),
                        e.preventDefault()
                }),
                    y(c.formSearchSelector).keypress(function(e) {
                        13 == e.which && (v(),
                            e.preventDefault())
                    }),
                    y(c.formSearchSelector + " button").on("click", function(e) {
                        v()
                    }),
                    window.onbeforeunload = function() {
                        var e = new FormData;
                        e.append("search", ""),
                            e.append("filter", y(c.formFilterSelector + " option:selected").val()),
                            navigator.sendBeacon("includes/loader.php", e)
                    }
            }
            function u(e, t) {
                var a = "";
                for (var o in e)
                    if (e.hasOwnProperty(o)) {
                        var n = e[o].fields;
                        for (var l in n)
                            n.hasOwnProperty(l) && Object.keys(n).forEach(function(e) {
                                if (!n[e].includes(t) && !n[e].includes(t.replace(">", "[]>")))
                                    return !1;
                                a = e
                            })
                    }
                return a
            }
            function h(e, t) {
                var a = [];
                for (var o in e)
                    e.hasOwnProperty(o) && ("object" == typeof e[o] ? a = a.concat(h(e[o], t)) : o == t && a.push(e[o]));
                return a
            }
        }
    })
}(jQuery);
var editFormData, formData, calendar = {};
