<!-- Bootstrap Paths -->
<?php 
$appPath = realpath(dirname(__FILE__));
defined('ESKIMO_PUBLIC_PATH') || define('ESKIMO_PUBLIC_PATH', $appPath . '/');
defined('ESKIMO_BASE_PATH') || define('ESKIMO_BASE_PATH', realpath(ESKIMO_PUBLIC_PATH . '..') . '/');
defined('BASE_FPATH') || define('BASE_FPATH', ESKIMO_BASE_PATH);
?>

<!-- Boiler Plate & Component -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Component</title>

		<!-- CSS Assets -->
		<link rel="stylesheet" href="/theme/css/master.css">

		<!-- JS Assets -->
		<script defer src="https://unpkg.com/alpinejs@3.9.1/dist/cdn.min.js"></script>
	</head>

	<body class="page" scroll>
	    <?php include_once( BASE_FPATH . "app/templates/components/core/html/scrollProgressIndicator.inc.php" ); ?>
	    <?php include_once( BASE_FPATH . "app/templates/components/core/html/scrollBasedParallax.inc.php" ); ?>
	    <?php include_once( BASE_FPATH . "app/templates/components/core/html/responsiveProperties.inc.php" ); ?>
	    <script src="/theme/js/app.js"></script>
	</body>

</html>