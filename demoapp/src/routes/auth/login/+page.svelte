<script lang="ts">
    import { Form, TextInput, Button } from "carbon-components-svelte";
    import Email from "carbon-icons-svelte/lib/Email.svelte";
    import "carbon-components-svelte/css/white.css";
    import * as EmailValidator from "email-validator";

    let disabled = true;
    const textinputchange = (event: CustomEvent) => {
        disabled =  !EmailValidator.validate(event.detail);
    };
</script>

<div class="content">
    <div class="loginForm">
        <Form on:submit method="post" action="?/login" >
            <h2>Login</h2>
            <p>Please enter a valid email to continue.</p>
            <div>
                <Email stroke="#eee" style="position:relative;left:10px;top:30px;z-index:999;"/>
                <TextInput style="padding:0rem 1rem 0rem 2rem;" placeholder="email" name="email" on:input={(event) => textinputchange(event)} />
            </div>
            <Button style="width:100%;margin:10px 0px 0px 0px;max-width:none;" size="field" type="submit" {disabled}>Sign In</Button>
        </Form>
    </div>
</div>

<style>

    .content {
        background-color: #f3f3f3;
        width:100%;
        height:100%;
        z-index:0;
    }

    .loginForm {
        background-color: white;
        margin: auto;
        padding:20px;
        border:1px solid #aaa;
        width:500px;
        height:250px;
        margin:0 auto;
        position:absolute;
        left:50%;
        top:50%;
        margin-left:-250px;
        margin-top:-125px;
    }
</style>