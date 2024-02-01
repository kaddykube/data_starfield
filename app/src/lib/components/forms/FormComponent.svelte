<script lang="ts">
	import { z } from 'zod';
    import { superForm } from 'sveltekit-superforms/client';
    import type { SuperValidated } from 'sveltekit-superforms';

    const schema = z.object({
        name: z.string().min(3).max(50),
        email: z.string().email('Bitte eine gültige Email eingeben.'),
    });

    const formData: SuperValidated<typeof schema> = {
        valid: false,
        posted: false,
        data: {
            name: '',
            email: '',
        },
        errors: {},
        constraints: {},
    };

    const { form, enhance, errors, allErrors } = superForm(formData, {
        SPA: true,
        validators: schema,
        taintedMessage: false,
        onUpdated: async ({ form }) => {
            if (form.valid) {
            }
        },
    });

    $: formValid = $allErrors.length === 0;

</script>

<form use:enhance method="post" action="?/create">
	<label>
		name:
		<input bind:value={$form.name}  
        name="name"
        type="text"/>
        <span>{$errors.name}</span>
	</label>
	<label>
		email:
		<input  bind:value={$form.email}  
        name="email"
        type="email"/>
        <span>{$errors.email}</span>
	</label>
    <button type="submit" disabled={$allErrors.length > 0}>
        abschicken</button>
</form>
