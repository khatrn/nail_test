<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta charset="utf-8">
    <title>Ajax Full Featured Calendar 2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ajax Full Featured Calendar 2">
    <meta name="author" content="Paulo Regina">

    <!-- styles -->
    <link href="public/css/bootstrap.css" rel="stylesheet">
    <link href="public/css/style.css" rel="stylesheet">
    <link href="public/css/smoothness/jquery-ui.css" rel="stylesheet">
    <link href="public/css/fullcalendar.print.css" media="print" rel="stylesheet">
    <link href="public/css/fullcalendar.css" rel="stylesheet">
    <link href="public/lib/spectrum/spectrum.css" rel="stylesheet">
    <link href="public/lib/timepicker/jquery-ui-timepicker-addon.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
<!---------------------------------------------- CALENDAR MODALs ---------------------------------------------->
<!-- Calendar Modal -->
<div class="modal fade" id="calendarModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 id="details-body-title"></h4>
            </div>
            <div class="modal-body">

                <div class="loadingDiv"></div>

                <!-- QuickSave/Edit FORM -->
                <form id="modal-form-body">
                    <p>
                        <label>Work name: </label>
                        <input class="form-control" name="work_name" value="" type="text" id="workName">
                    </p>
                    <p>
                        <label>Start date: </label>
                        <input id="start_date" type="datetime-local" name="start_date" class="form-control" value="<?= date('Y-m-d\T00:00') ?>");>
                    </p>
                    <p>
                        <label>End date: </label>
                        <input id="end_date" type="datetime-local" name="end_date" class="form-control" value="<?= date('Y-m-d\T23:59'); ?>">
                    </p>
                    <p>
                        <label>Status: </label>
                        <select name="status" class="form-control">
                            <option value="0">Planing</option>
                            <option value="1">Doing</option>
                            <option value="2">Complete</option>
                        </select>
                    </p>
                </form>

                <!-- Modal Details -->
                <div id="details-body">
                    <div id="details-body-content"></div>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" id="export-event" class="btn btn-warning">Export</button>
                <button type="button" id="delete-event" class="btn btn-danger">Delete</button>
                <button type="button" id="edit-event" class="btn btn-info">Edit</button>
                <button type="button" id="add-event" class="btn btn-primary">Add</button>
                <button type="button" id="save-changes" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Delete Prompt -->
<div id="cal_prompt" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
                <a href="#" class="btn btn-danger" data-option="remove-this">Delete this</a>
                <a href="#" class="btn btn-danger" data-option="remove-repetitives">Delete all</a>
                <a href="#" class="btn btn-default" data-dismiss="modal">Close</a>
            </div>
        </div>
    </div>
</div>

<!-- Modal Edit Prompt -->
<div id="cal_edit_prompt_save" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body-custom"></div>
            <div class="modal-footer">
                <a href="#" class="btn btn-info" data-option="save-this">Save this</a>
                <a href="#" class="btn btn-info" data-option="save-repetitives">Save all</a>
                <a href="#" class="btn btn-default" data-dismiss="modal">Close</a>
            </div>
        </div>
    </div>
</div>

<input type="hidden" name="cal_token" id="cal_token" value="<?= md5(uniqid(mt_rand(), true)) ?>" />
<!---------------------------------------------- THEME ---------------------------------------------->


<div class="container" style="margin-top: 80px;">

    <div class="box">
        <div class="header"><h4>Calendar</h4></div>
        <div class="content">
            <div id="calendar"></div>
            <div id="loading" class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    </div>

</div> <!-- /container -->

<script src="public/lib/moment.js"></script>
<script src="public/lib/jquery.js"></script>
<script src="public/lib/jquery-ui.js"></script>
<script src="public/js/bootstrap.js"></script>
<script src="public/js/fullcalendar.js"></script>
<script src="public/js/lang-all.js"></script>
<script src="public/js/jquery.calendar.js"></script>
<script src="public/lib/spectrum/spectrum.js"></script>

<script src="public/lib/timepicker/jquery-ui-sliderAccess.js"></script>
<script src="public/lib/timepicker/jquery-ui-timepicker-addon.min.js"></script>

<script src="public/js/custom.js"></script>

<script src="public/js/g.map.js"></script>
<script src="public/js/gcal.js"></script>
<script src="http://maps.google.com/maps/api/js" defer></script>

<!-- call calendar plugin -->
<script type="text/javascript">
    $().FullCalendarExt({
        calendarSelector: '#calendar',
        lang: 'en',
        fc_extend: {
            nowIndicator: true
        }
    });

</script>
</body>

<!-- Mirrored from pauloreg.com/d/affc2/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 10 Feb 2022 10:11:10 GMT -->
</html>
