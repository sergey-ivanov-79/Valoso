<HTML>
    <TITLE>Valoso HTML templates</TITLE>
	<BODY>
        <h2>Valoso HTML templates</h2>
        <UL><?php
            if ($handle = opendir('.')) {
                while (false !== ($file = readdir($handle)))
                {
                    if ($file != "." && $file != ".." && strtolower(substr($file, strrpos($file, '.') + 1)) == 'html'){
                        ?><li><a href="<?php echo $file; ?>"><?php echo $file; ?></a></li><?php
                    }
                }
                closedir($handle);
            }
    	    ?>
        </UL>
    
    </BODY>
<HTML>