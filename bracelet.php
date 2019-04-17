<?php
$adminPath = plugins_url() . '/' . PWACOMMERCE_DOMAIN . '/admin';
wp_enqueue_media();
?>

<div class="clear"></div>

<!-- /////////////////////// html code goes here ///////////////////////// -->
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root" data-react=""></div>
<script type="text/javascript">
  jQuery(document).ready(function(e){
    jQuery('head').append('<link rel="stylesheet" href="<?php echo $adminPath;?>/css/main.css" />');
  });
</script>
<script type="text/javascript" src="<?php echo $adminPath;?>/js/main.js"></script>